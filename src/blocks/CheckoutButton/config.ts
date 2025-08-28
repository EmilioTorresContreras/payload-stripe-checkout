import { Block } from 'payload';

export const CheckoutButton: Block = {
  slug: 'checkoutButton',
  labels: {
    singular: 'Botón de Checkout',
    plural: 'Botones de Checkout',
  },
  fields: [
    {
      name: 'buttonText',
      type: 'text',
      label: 'Texto del botón',
      required: true,
      defaultValue: 'Pagar ahora',
    },
    {
      name: 'priceId',
      type: 'text',
      label: 'URL de Stripe Checkout',
      required: true,
    },
    {
      name: 'plan',
      type: 'text',
      label: 'Plan',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitulo',
      required: true,
    },
    {
      name: 'schoolId',
      type: 'text',
      label: 'Escuela',
      required: true,
    },
    {
      name: 'userId',
      type: 'text',
      label: 'Usuario',
      required: true,
    },
  ],
};
