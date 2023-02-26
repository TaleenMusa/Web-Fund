function PizzaOven(crustType, sauceType, cheeses, toppings) {
    var Pizza = {};
    Pizza.crustType = crustType;
    Pizza.sauceType = sauceType;
    Pizza.cheeses = cheeses;
    Pizza.toppings = toppings;
    return Pizza;
}

var Pizza1 = PizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(Pizza1);
var Pizza2 = PizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(Pizza2);
var Pizza3 = PizzaOven("hand tossed", "marinara", ["mozzarella"], ["mushrooms", "olives", "onions"]);
console.log(Pizza3);
var Pizza4 = PizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage", "onions"]);
console.log(Pizza4);