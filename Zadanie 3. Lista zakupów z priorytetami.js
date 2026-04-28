const shoppingList = [
    { name: "chleb", quantity: 2, urgent: true },
    { name: "mleko", quantity: 1, urgent: false },
    { name: "jajka", quantity: 10, urgent: true },
    { name: "makaron", quantity: 3, urgent: false }
];

console.log("Pełna lista zakupów:");
shoppingList.forEach(item => console.log(`- ${item.name} (${item.quantity} szt.)`));

const urgentItems= shoppingList.filter(item => item.urgent);
const  upperCaseNames = shoppingList.map(item => item.name.toUpperCase());

console.log("\n--- RAPORT ZAKUPÓW ---");
console.log(`Liczba pilnych pozycji: ${urgentItems.length}`);
console.log("Wszystkie produkty (WIELKIE LITERY):", upperCaseNames.join(", "));