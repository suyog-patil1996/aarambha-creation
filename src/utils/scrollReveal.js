export function scrollReveal(amount = 0.2) {
  return {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, amount },
  };
}
