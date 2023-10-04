import Cart from './Cart';

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

console.log(cart.items);

console.log(cart.calculateTotalCost());

console.log(cart.calculateTotalCost(50));

cart.remove(104);

console.log(cart.items);
