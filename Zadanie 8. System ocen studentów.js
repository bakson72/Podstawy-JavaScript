const grades = [3.0, 4.0, 5.0, 3.5, 4.5];

function evaluateStudent(grades) {

    const PASS_THRESHOLD = 3.0

    const sum = grades.reduce((acc, curr) => acc + curr, 0);
    const average = sum / grades.length;

    const status = average >= PASS_THRESHOLD ? "Zaliczone" : "Nie Zaliczone";

    return {
        average: average,
        status: status
    };
}

const result = evaluateStudent(grades)

console.log("--- PODSUMOWANIE WYNIKÓW ---");
console.log(`Średnia ocen: ${result.average}`);
console.log(`Status:       ${result.status}`);





