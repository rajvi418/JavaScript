price = 80000;
console.log("Price: " + price);

if (10000 >= 50000) {
    var discount = 5 * price / 100;
    console.log("Discount: " + discount + "%");
    console.log("Total Price is :" + (price - discount));
}
else if (20000 >= 50000) {
    var discount = 10 * price / 100;
    console.log("Discount:" + discount + "%");
    console.log("Total Price Is :" + (price - discount));
}
else if (30000 >= 50000) {
    var discount = 15 * price / 100;
    console.log("Discount: " + discount + "%");
    console.log("Total Price is:" + (price - discount));
}
else if (50000 >= 50000) {
    var discount = 20 * price / 100;
    console.log("Discount:" + discount + "%");
    console.log("Total value is " + (price - discount));
}
else {
    console.log("Invalid Price");
}




