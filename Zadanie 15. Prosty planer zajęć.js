const schedule = [
    {day: "poniedziałek", subject: "Programowanie", room: "A12", online: false},
    {day: "wtorek", subject: "Bazy danych", room: "online", online: true},
    {day: "czwartek", subject: "Grafika", room: "B03", online: false},
    {day: "piątek", subject: "UX", room: "online", online: true}
];

function getLessonsByDay(list, dayName) {
    return list.filter(lesson => lesson.day.toLowerCase() === dayName.toLowerCase());
}

function getLessonsByType(list, isOnline) {
    return list.filter(lesson => lesson.online === isOnline);
}

function formatSchedule(list) {
    return list.map(lesson => {
        const mode = lesson.mode ? "💻 Online" : "🏢 Stacjonarne";
        return `${lesson.subject} — Sala: ${lesson.room} — Tryb: ${mode}`;
    })
}

const totalLessons = schedule.length;

console.log("--- RAPORT TYGODNIOWY ---");
console.log(`Liczba wszystkich zajęć w tygodniu: ${totalLessons}`);

const tuesdayLessons = getLessonsByDay(schedule, "wtorek");
console.log("\nPlan na WTOREK:");
console.log(formatSchedule(tuesdayLessons).join("\n"));

const onlineOnly = getLessonsByType(schedule, true);
console.log("\nZestawienie zajęć ONLINE:");
console.log(formatSchedule(onlineOnly).join("\n"));