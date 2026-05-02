const repairs = [
    {id: 1, client: "Anna", device: "laptop", status: "nowe"},
    {id: 2, client: "Piotr", device: "telefon", status: "w trakcie"},
    {id: 3, client: "Ola", device: "tablet", status: "zakończone"}
];

const ticketToFind = repairs.find(repair => repair.id === 2);


const updatedRepairs = repairs.map(repair =>
    repair.id === 1
        ? {...repair, status: "zakończone"}
        : repair
);


const inProgressCount = repairs.filter(repair => repair.status === "w trakcie").length

console.log("\n--- RAPORT SERWISOWY ---");
console.log("Liczba napraw w trakcie:", inProgressCount);

console.log("\nOryginalna tablica (niezmieniona):");
console.table(repairs);

console.log("\nZaktualizowana tablica (nowy obiekt):");
console.table(updatedRepairs);