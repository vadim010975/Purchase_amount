import Cart from '../Cart';

const cart = new Cart;

cart.add({
  id: 101,
  name: 'PHP 8',
  price: 2000,
});
cart.add({
  id: 102,
  name: 'Java Script на примерах',
  price: 750,
});
cart.add({
  id: 103,
  name: 'Web на практике',
  price: 1050,
});
cart.add({
  id: 104,
  name: 'С++ на примерах',
  price: 1500,
});

test('calculate the total cost excluding discounts', () => {
  expect(cart.calculateTotalCost()).toBe(5300);
});

test('calculate the total cost including discounts', () => {
  expect(cart.calculateTotalCost(50)).toBe(2650);
});

test('Deleting one product', () => {
  cart.remove(104);
  expect(cart.items).toEqual([
    { id: 101, name: 'PHP 8', price: 2000, },
    { id: 102, name: 'Java Script на примерах', price: 750, },
    { id: 103, name: 'Web на практике', price: 1050, },
  ]);
});