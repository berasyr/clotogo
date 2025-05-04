import { loadStripe } from '@stripe/stripe-js';

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
  description?: string;
}

interface CheckoutOptions {
  items: OrderItem[];
  customerName: string;
  customerEmail: string;
  deliveryAddress: string;
}

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// Helper function to format price for Stripe (converts to cents)
export const formatPriceForStripe = (price: number) => {
  return Math.round(price * 100);
};

export async function createCheckoutSession({ items, customerName, customerEmail, deliveryAddress }: CheckoutOptions) {
  try {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items,
        customerName,
        customerEmail,
        deliveryAddress,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Something went wrong');
    }

    // Redirect to Stripe Checkout
    const stripe = await stripePromise;
    if (!stripe) throw new Error('Stripe failed to initialize');

    const result = await stripe.redirectToCheckout({
      sessionId: data.id,
    });

    if (result.error) {
      throw new Error(result.error.message);
    }
  } catch (error) {
    console.error('Error in createCheckoutSession:', error);
    throw error;
  }
} 