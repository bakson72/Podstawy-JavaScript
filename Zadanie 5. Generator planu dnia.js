const tasks = ['zajęcia', 'zakupy', 'trening']

function createDayPlan(name, tasks = []) {
    if (tasks.length === 0) {
        return `Plan dla: ${name}\nDziś masz dzień wolny! Odpoczywaj.`
    }

    const plan = `Użytkownik: ${name} \nPlan dnia na dziś: \n${tasks}\n`
    return plan
}

const planJakuba = createDayPlan('Jakub', tasks)
const planMarka = createDayPlan('Marek', ['programowanie', 'spacer'])
const planDucha = createDayPlan('Nieznajomy')

// Wyświetlenie wyników
console.log(planJakuba)
console.log(planMarka)
console.log(planDucha)