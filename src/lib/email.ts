import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

interface OrderItem {
  name: string
  price: number
  quantity: number
}

interface OrderDetails {
  items: OrderItem[]
  totalAmount: number
  customerEmail: string
  customerName: string
  deliveryAddress: string
  sessionId: string
}

export async function sendOrderConfirmationEmail(orderDetails: OrderDetails) {
  const itemsList = orderDetails.items
    .map(item => `${item.name} x${item.quantity} - $${item.price.toFixed(2)}`)
    .join('\n')

  const msg = {
    to: process.env.ADMIN_EMAIL!, // Your email address
    from: process.env.SENDGRID_FROM_EMAIL!, // Verified sender email
    subject: 'New CloToGo Order Received',
    text: `
New Order Received!

Order Details:
-------------
Customer Name: ${orderDetails.customerName}
Customer Email: ${orderDetails.customerEmail}
Delivery Address: ${orderDetails.deliveryAddress}
Order ID: ${orderDetails.sessionId}

Items:
${itemsList}

Total Amount: $${orderDetails.totalAmount.toFixed(2)}

This order was processed through Stripe.
    `,
    html: `
<h2>New Order Received!</h2>

<h3>Order Details:</h3>
<ul>
  <li><strong>Customer Name:</strong> ${orderDetails.customerName}</li>
  <li><strong>Customer Email:</strong> ${orderDetails.customerEmail}</li>
  <li><strong>Delivery Address:</strong> ${orderDetails.deliveryAddress}</li>
  <li><strong>Order ID:</strong> ${orderDetails.sessionId}</li>
</ul>

<h3>Items:</h3>
<ul>
  ${orderDetails.items.map(item => `
    <li>${item.name} x${item.quantity} - $${item.price.toFixed(2)}</li>
  `).join('')}
</ul>

<p><strong>Total Amount:</strong> $${orderDetails.totalAmount.toFixed(2)}</p>

<p>This order was processed through Stripe.</p>
    `,
  }

  try {
    await sgMail.send(msg)
    console.log('Order confirmation email sent successfully')
  } catch (error) {
    console.error('Error sending order confirmation email:', error)
    throw error
  }
} 