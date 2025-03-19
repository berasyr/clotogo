import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with your publishable key
export const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// Helper function to format price for Stripe (converts to cents)
export const formatPriceForStripe = (price: number) => {
  return Math.round(price * 100);
};

// Helper function to create a Stripe checkout session
export const createCheckoutSession = async (items: any[]) => {
  try {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items }),
    });

    const session = await response.json();

    // Redirect to Stripe Checkout
    const stripe = await stripePromise;
    if (stripe) {
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (error) {
        console.error('Error:', error);
        throw new Error(error.message);
      }
    }
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
}; 