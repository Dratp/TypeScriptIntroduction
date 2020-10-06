interface Product {
    name: String,
    price: number
}

interface InventoryItem {
    product: Product,
    quantity: number
}


function GetInventory() {
    let prod1: Product = {
        name: 'motor',
        price: 10.00
    };
    let prod2: Product = {
        name: 'sensor',
        price: 12.50
    };
    let prod3: Product = {
        name: 'LED',
        price: 1.00
    };

    let inven1: InventoryItem = {
        product: prod1,
        quantity: 10
    };
    let inven2: InventoryItem = {
        product: prod2,
        quantity: 4
    };
    let inven3: InventoryItem = {
        product: prod3,
        quantity: 20
    };

    let invenArray: InventoryItem[] = [inven1, inven2, inven3];
    let total = calcInventoryValue(invenArray);

    console.log(`The total price of all items in inventory is ${total}`);
}

function calcInventoryValue(inventory: InventoryItem[]) {
    let total = 0;
    for (let item of inventory) {
        total = total + item.product.price * item.quantity;
    }
    return total;
}

function GetProducts() {
    let products: Product[] = [{ name: 'Force of Will', price: 74.34 }];
    products.push({ name: 'Pact of Negation', price: 26.09 });
    products.push({ name: 'Force of Negation', price: 46.24 });

    var average = calcAverageProductPrice(products);
    console.log(`The average price is ${average}`);
}


function calcAverageProductPrice(cards: Product[]) {
    var sum = 0;
    for (let card of cards) {
        sum += card.price;
    }
    var average = sum / cards.length;
    return average;
}


interface Mountain {
    name: String,
    height: number
}

function GetMountains() {
    let moutains: Mountain[] = [{ name: 'Kilimanjaro', height: 19341 }
    ]
    moutains.push({ name: 'Everest', height: 29029 });
    moutains.push({ name: 'Denali', height: 20310 });
    moutains.push({ name: 'K2', height: 28251 });

    var tallest = findNameOfTallestMountain(moutains);
    console.log(`The tallest moutain is: ${tallest.name} at a height of ${tallest.height}`);
}

function findNameOfTallestMountain(moutains: Mountain[]) {
    let tallest: Mountain = {
        name: '',
        height: 0
    };

    for (let mount of moutains) {
        if (mount.height > tallest.height) {
            tallest = mount;
        }
    };

    return tallest;
}


interface Car {
    model: String,
    color: String,
    drive(): void
}

function trip(car: Car) {
    console.log('welcome to the trip function');
    car.drive();
    console.log(car.model);
    console.log('trip finished!')
}

function testtrip() {
    let honda : Car= {
        model: 'Civic',
        color: 'Red',
        drive: function () {
            console.log('Honda is driving');
        }
    };

    let schwin = {
        model: 'abc',
        color: 'black',
        wheelsize: 30
    }

    let chevy : Car = {
        model: 'Trax',
        color: 'Blue',
        drive: function () {
            console.log('Chevy is driving');
        }
    };

    trip(honda);
    trip(chevy);

    let carshop: Car[] = [
        honda
    ]

    carshop.push(chevy);
    // carshop.push(schwin); does not work as schwin is not a Car

    for (let car of carshop) {
        console.log(car.model);
    }
        
}
