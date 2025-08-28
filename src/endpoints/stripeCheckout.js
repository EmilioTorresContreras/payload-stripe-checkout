
import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-08-01'
});

export const stripeCheckout = async (request) => {
  try {
    const { priceId, schoolId, userId, plan } = await request.json();
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/success?sessionId={CHECKOUT_SESSION_ID}`,
      //success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/cancelled`,
      metadata: {
        schoolId: schoolId,
        userId: userId,
        plan: plan
      }
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error creating Stripe checkout session' });
  }
};
