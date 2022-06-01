const formatter = new Intl.NumberFormat('en', {
  style: 'currency',
  currency: 'USD',
});

export const formatPrice = (price) => formatter.format(price / 100);
