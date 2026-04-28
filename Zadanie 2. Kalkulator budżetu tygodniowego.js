const expenses = [18.5, 42, 9.99, 27, 61.3, 15, 33.5];

const totalSum = expenses.reduce((acc, curr) => acc + curr, 0);

const averageExpense = totalSum / expenses.length;

const maxExpense = Math.max(...expenses);


// Wyświetlenie końcowego raportu w konsoli
console.log("--- RAPORT WYDATKÓW ---");
console.log(`Suma wszystkich wydatków: ${totalSum.toFixed(2)} zł`);
console.log(`Średni wydatek:           ${averageExpense.toFixed(2)} zł`);
console.log(`Największy wydatek:      ${maxExpense.toFixed(2)} zł`);
console.log("-----------------------");