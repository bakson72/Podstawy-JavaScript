const hasLaptop = true;
const hasCharger = false;
const hasNotebook = true;
const dayType = "laboratorium";

let isReady = false;

if (dayType === "laboratorium") {
    isReady = hasLaptop;
} else if (dayType === "wykład") {
    isReady = hasLaptop || hasNotebook;
} else {
    isReady = hasNotebook;
}

const statusMessage = isReady ? "Status: GOTOWY" : "Status: NIEGOTOWY";


// Wyświetlenie raportu
console.log(`--- KONTROLA PRZED ZAJĘCIAMI ---`);
console.log(`Typ dnia: ${dayType.toUpperCase()}`);
console.log(statusMessage);

(hasLaptop && !hasCharger) && console.log("OSTRZEŻENIE: Masz laptopa, ale zapomniałeś ładowarki! Bateria może paść.");