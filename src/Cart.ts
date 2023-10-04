import Buyable from './Buyable';

export default class Cart {
  private _items: Buyable[] = [];
  add(item: Buyable): void {
    this._items.push(item);
  }
  get items(): Buyable[] {
    return [...this._items];
  }
  calculateTotalCost(discount: number = 0): number {
    return (this._items.reduce((sum, item) => sum + item.price, 0)) * (1 - (discount / 100));
  }
  remove(id: number): void {
    this._items.splice(this._items.findIndex(item => item.id === id), 1);
  }
}