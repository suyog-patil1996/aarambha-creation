export const PRICING_PLANS = [
  {
    id: 1,
    name: 'Starter',
    price: '$29',
    period: '/mo',
    description: 'For individuals and small projects just getting started.',
    features: ['1 Website', 'Basic Support', '5 Pages', 'SSL Included'],
    highlighted: false,
  },
  {
    id: 2,
    name: 'Professional',
    price: '$79',
    period: '/mo',
    description: 'For growing businesses that need more flexibility.',
    features: ['5 Websites', 'Priority Support', 'Unlimited Pages', 'SSL Included', 'Custom Domain'],
    highlighted: true,
  },
  {
    id: 3,
    name: 'Enterprise',
    price: '$149',
    period: '/mo',
    description: 'For teams that need dedicated support and scale.',
    features: ['Unlimited Websites', '24/7 Support', 'Unlimited Pages', 'SSL Included', 'Dedicated Manager'],
    highlighted: false,
  },
];
