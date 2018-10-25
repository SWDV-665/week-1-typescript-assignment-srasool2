var Grocery = /** @class */ (function () {
    function Grocery(grocery_name, grocery_quantity) {
        this.grocery_name = grocery_name;
        this.grocery_quantity = grocery_quantity;
    }
    return Grocery;
}());
var item1 = new Grocery("milk", 3);
var item2 = new Grocery("bread", 6);
var item3 = new Grocery("eggs", 11);
var items;
items = [item1, item2, item3];
console.log(items);
