const tripCosts = [
    {label: "nocleg", amount: 420, paidBy: "Anna"},
    {label: "paliwo", amount: 260, paidBy: "Piotr"},
    {label: "jedzenie", amount: 180, paidBy: "Anna"},
    {label: "bilety", amount: 140, paidBy: "Ola"}
];

const totalCost = tripCosts.reduce((acc, curr) => acc + curr.amount, 0);


const costsPerPerson = tripCosts.reduce((acc,curr) =>{
    acc[curr.paidBy] = (acc[curr.paidBy] || 0) + curr.amount;
    return acc;
}, {});


const participants = Object.keys(costsPerPerson);
console.log(participants)
const topSpender = participants.reduce((prev, curr) =>
    costsPerPerson[curr] > costsPerPerson[prev] ? curr : prev
);

const sharePerPerson = totalCost / participants.length;

console.log(`--- RAPORT KOSZTÓW WYJAZDU ---`);
console.log(`Całkowity koszt: ${totalCost} zł`);
console.log(`Koszt na osobę:  ${sharePerPerson.toFixed(2)} zł`);
console.log(`Najwięcej zapłacił(a): ${topSpender} (${costsPerPerson[topSpender]} zł)`);
console.log(`\nSzczegółowe rozliczenie:`);

participants.forEach(person => {
    const paid = costsPerPerson[person];
    const balance = paid - sharePerPerson;
    const status = balance >= 0 ? `(odbierze: ${balance.toFixed(2)} zł)` : `(odda: ${Math.abs(balance).toFixed(2)} zł)`;
    console.log(`- ${person}: wpłacono ${paid} zł ${status}`);
});