import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { sendOrderConfirmationEmail } from '@/lib/email'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

export async function POST(request: Request) {
  try {
    const { items, customerName, customerEmail, deliveryAddress } = await request.json()

    // Calculate total amount (including delivery fee)
    const totalAmount = items.reduce((sum: number, item: any) => sum + item.price, 0) + 5.00 // $5.00 delivery fee

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        ...items.map((item: any) => ({
          price_data: {
            currency: 'usd',
            product_data: {
              name: item.name,
            },
            unit_amount: Math.round(item.price * 100), // Convert to cents
          },
          quantity: item.quantity || 1,
        })),
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Delivery Fee',
            },
            unit_amount: 500, // $5.00 in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/order/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/order/cancel`,
      customer_email: customerEmail,
      metadata: {
        customerName,
        deliveryAddress,
      },
    })

    // Send order confirmation email
    await sendOrderConfirmationEmail({
      items,
      totalAmount,
      customerName,
      customerEmail,
      deliveryAddress,
      sessionId: session.id,
    })

    return NextResponse.json({ id: session.id })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    )
  }
} 