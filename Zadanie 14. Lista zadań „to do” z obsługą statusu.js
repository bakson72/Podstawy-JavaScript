let todos = [
    {id: 1, title: "Oddać projekt", done: false},
    {id: 2, title: "Przeczytać rozdział", done: true},
    {id: 3, title: "Przygotować prezentację", done: false}
];

function addTodo(list, title) {
    const newTodo = {
        id: list.length > 0 ? Math.max(...list.map(t => t.id)) + 1 : 1,
        title: title,
        done: false

    };
    return [...list, newTodo];
}

function toggleDone(list, id) {
    return list.map(todo => todo.id === id
        ? {...todo, done: true}
        : todo)
}

function getActiveTodos(list) {
    return list.filter(todo => !todo.done)
}


console.log("--- TEST LOGIKI TODO ---");

// Dodawanie zadania
const afterAdd = addTodo(todos, "Kupić kawę");
console.log("Po dodaniu zadania:");
console.table(afterAdd);

// Zmiana statusu zadania o ID 1
const afterToggle = toggleDone(afterAdd, 1);
console.log("Po oznaczeniu ID 1 jako wykonane:");
console.table(afterToggle);

// Filtrowanie niewykonanych
const activeOnes = getActiveTodos(afterToggle);
console.log("Tylko niewykonane zadania:");
console.table(activeOnes);

// Sprawdzenie oryginalnej tablicy (powinna być niezmieniona)
console.log("Oryginalna tablica (pozostała nienaruszona):");
console.table(todos);
