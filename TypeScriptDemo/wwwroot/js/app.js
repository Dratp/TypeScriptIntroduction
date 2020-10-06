function GetInventory() {
    var prod1 = {
        name: 'motor',
        price: 10.00
    };
    var prod2 = {
        name: 'sensor',
        price: 12.50
    };
    var prod3 = {
        name: 'LED',
        price: 1.00
    };
    var inven1 = {
        product: prod1,
        quantity: 10
    };
    var inven2 = {
        product: prod2,
        quantity: 4
    };
    var inven3 = {
        product: prod3,
        quantity: 20
    };
    var invenArray = [inven1, inven2, inven3];
    var total = calcInventoryValue(invenArray);
    console.log("The total price of all items in inventory is " + total);
}
function calcInventoryValue(inventory) {
    var total = 0;
    for (var _i = 0, inventory_1 = inventory; _i < inventory_1.length; _i++) {
        var item = inventory_1[_i];
        total = total + item.product.price * item.quantity;
    }
    return total;
}
function GetProducts() {
    var products = [{ name: 'Force of Will', price: 74.34 }];
    products.push({ name: 'Pact of Negation', price: 26.09 });
    products.push({ name: 'Force of Negation', price: 46.24 });
    var average = calcAverageProductPrice(products);
    console.log("The average price is " + average);
}
function calcAverageProductPrice(cards) {
    var sum = 0;
    for (var _i = 0, cards_1 = cards; _i < cards_1.length; _i++) {
        var card = cards_1[_i];
        sum += card.price;
    }
    var average = sum / cards.length;
    return average;
}
function GetMountains() {
    var moutains = [{ name: 'Kilimanjaro', height: 19341 }
    ];
    moutains.push({ name: 'Everest', height: 29029 });
    moutains.push({ name: 'Denali', height: 20310 });
    moutains.push({ name: 'K2', height: 28251 });
    var tallest = findNameOfTallestMountain(moutains);
    console.log("The tallest moutain is: " + tallest.name + " at a height of " + tallest.height);
}
function findNameOfTallestMountain(moutains) {
    var tallest = {
        name: '',
        height: 0
    };
    for (var _i = 0, moutains_1 = moutains; _i < moutains_1.length; _i++) {
        var mount = moutains_1[_i];
        if (mount.height > tallest.height) {
            tallest = mount;
        }
    }
    ;
    return tallest;
}
function trip(car) {
    console.log('welcome to the trip function');
    car.drive();
    console.log(car.model);
    console.log('trip finished!');
}
function testtrip() {
    var honda = {
        model: 'Civic',
        color: 'Red',
        drive: function () {
            console.log('Honda is driving');
        }
    };
    var schwin = {
        model: 'abc',
        color: 'black',
        wheelsize: 30
    };
    var chevy = {
        model: 'Trax',
        color: 'Blue',
        drive: function () {
            console.log('Chevy is driving');
        }
    };
    trip(honda);
    trip(chevy);
    var carshop = [
        honda
    ];
    carshop.push(chevy);
    // carshop.push(schwin); does not work as schwin is not a Car
    for (var _i = 0, carshop_1 = carshop; _i < carshop_1.length; _i++) {
        var car = carshop_1[_i];
        console.log(car.model);
    }
}
//# sourceMappingURL=app.js.map