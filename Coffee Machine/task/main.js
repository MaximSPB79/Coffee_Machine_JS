const input = require('sync-input');

let ingredients = [400, 540, 120, 9, 550];

let espresso = {
    water: 250,
    milk: 0,
    coffee: 16,
    price: 4
}

let latte = {
    water: 350,
    milk: 75,
    coffee: 20,
    price: 7
}

let cappuccino = {
    water: 200,
    milk: 100,
    coffee: 12,
    price: 6
}
while (true) {
    console.log("Write action (buy, fill, take, remaining, exit):");
    let action = input();
    console.log();
    switch (action) {
        case "buy":
            buy();
            break;
        case "fill":
            fill();
            break;
        case "take":
            take();
            break;
        case "remaining":
            printInfo();
            break;
        case "exit":
            return;
    }
}

function printInfo() {
    console.log(`The coffee machine has:
${ingredients[0]} ml of water
${ingredients[1]} ml of milk
${ingredients[2]} g of coffee beans
${ingredients[3]} disposable cups
$${ingredients[4]} of money\n`);
}

function buy() {
    console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:");
    let option = input();
    console.log();
    switch (option) {
        case "1":
            resourceCount(espresso);
            break;
        case "2":
            resourceCount(latte);
            break;
        case "3":
            resourceCount(cappuccino);
            break;
        case "back":
            break;
    }
}

function resourceCount(coffee) {
    if (ingredients[0] >= coffee.water &&
        ingredients[1] >= coffee.milk &&
        ingredients[2] >= coffee.coffee &&
        ingredients[3] > 0) {
        console.log("I have enough resources, making you a coffee!");
        makingCoffee(coffee);
    } else if (ingredients[0] < coffee.water) {
        console.log("Sorry, not enough water!\n");
    } else if (ingredients[1] < coffee.milk) {
        console.log("Sorry, not enough milk!\n")
    } else if (ingredients[2] < coffee.coffee) {
        console.log("Sorry, not enough coffee!\n");
    } else if (ingredients[3] == 0) {
        console.log("Sorry, not enough cups!\n");
    }
}

function makingCoffee(coffee) {
    ingredients[0] -= coffee.water;
    ingredients[1] -= coffee.milk;
    ingredients[2] -= coffee.coffee;
    ingredients[3]--;
    ingredients[4] += coffee.price
}

function fill() {
    console.log("Write how many ml of water you want to add:");
    ingredients[0] += Number(input());
    console.log("Write how many ml of milk you want to add:");
    ingredients[1] += Number(input());
    console.log("Write how many grams of coffee beans you want to add:");
    ingredients[2] += Number(input());
    console.log("Write how many disposable coffee cups you want to add:");
    ingredients[3] += Number(input());
    console.log();
}

function take() {
    console.log(`I gave you $${ingredients[4]} \n`);
    ingredients[4] = 0;
}


