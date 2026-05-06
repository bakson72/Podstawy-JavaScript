const contacts = [
    { name: "Anna Nowak", phone: "500-100-200", city: "Katowice", favorite: true },
    { name: "Piotr Lis", phone: "501-300-700", city: "Sosnowiec", favorite: false },
    { name: "Ola Marek", phone: "502-400-900", city: "Katowice", favorite: true }
];

function searchByCity(contacts, city){
    return contacts.filter(x => x.city === city)
}
function onlyFavorites(contacts){
    return contacts.filter(x => x.favorite)
}

function prettierContact(contacts){
    return contacts.map(contact => `${contact.name}: ${contact.phone}`)
}

function searchByName(contacts, query) {
    return contacts.filter(x => x.name.toLowerCase().includes(query.toLowerCase())
    );
}

console.log("--- WYSZUKIWARKA KONTAKTÓW ---");

// Przypadek 1: Ulubione kontakty z Katowic
const katowiceFavs = onlyFavorites(searchByCity(contacts, "Katowice"));
console.log("Ulubione z Katowic:");
console.log(prettierContact(katowiceFavs));

// Przypadek 2: Wyszukiwanie po nazwie "Lis"
const searchResult = searchByName(contacts, "Lis");
console.log("\nWynik wyszukiwania 'Lis':");
console.log(prettierContact(searchResult));

// Przypadek 3: Wszystkie ulubione
console.log("\nWszyscy ulubieńcy:");
console.log(prettierContact(onlyFavorites(contacts)));

