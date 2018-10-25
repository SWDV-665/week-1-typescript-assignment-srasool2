class Grocery {
    grocery_name: string;
    grocery_quantity: number;
    constructor(grocery_name: string, grocery_quantity: number) {
        this.grocery_name = grocery_name;
        this.grocery_quantity = grocery_quantity;
    }
}

let item1 = new Grocery("milk", 3);
let item2 = new Grocery("bread", 6);
let item3 = new Grocery("eggs", 11);

var items:Grocery[];
items = [item1, item2, item3];

console.log(items);
