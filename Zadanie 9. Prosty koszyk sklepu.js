const cart = [
    {name: "Chleb", price: 4.5, quantity: 2},
    {name: "Ser", price: 9.9, quantity: 1},
    {name: "Sok", price: 6.2, quantity: 3}
];

const discountThreshold = 30;
const discountPercent = 10;

const cartDetails = cart.map(item => ({
    description: `${item.quantity}x ${item.name}`,
    subtotal: item.price * item.quantity
}));


const totalBeforeDiscount = cartDetails.reduce((sum, item) => sum + item.subtotal, 0)

let finalTotal = totalBeforeDiscount;
let discountApplied = false

if (totalBeforeDiscount > discountThreshold) {
    finalTotal = totalBeforeDiscount * (1 - discountPercent / 100);
    discountApplied = true;
}


console.log("--- TWOJE ZAKUPY ---");
cartDetails.forEach(item => console.log(item.description));
console.log("--------------------");
console.log(`Suma przed rabatem: ${totalBeforeDiscount.toFixed(2)} zł`);

if (discountApplied) {
    console.log(`Rabat (${discountPercent}%): TAK`);
    console.log(`Suma po rabacie:    ${finalTotal.toFixed(2)} zł`);
} else {
    console.log(`Do rabatu brakuje:  ${(discountThreshold - totalBeforeDiscount).toFixed(2)} zł`);
}