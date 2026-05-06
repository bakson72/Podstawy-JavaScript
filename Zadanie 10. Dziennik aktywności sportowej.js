const activities = [
    {type: "bieg", minutes: 35, calories: 320},
    {type: "rower", minutes: 50, calories: 410},
    {type: "spacer", minutes: 20, calories: 90},
    {type: "siłownia", minutes: 60, calories: 450}
];

const totalMinutes = activities.reduce((acc, curr) => acc + curr.minutes, 0);

const totalCalories = activities.reduce((acc, curr) => acc + curr.calories, 0);

const longActivities = activities.filter(act => act.minutes > 30);

const mostIntense = activities.reduce((prev, current) =>
    (prev.calories > current.calories) ? prev : current
);

const report = `
--- TYGODNIOWY RAPORT AKTYWNOŚCI ---
Łączny czas treningów: ${totalMinutes} minut
Całkowite spalone kalorie: ${totalCalories} kcal
Liczba intensywnych treningów (>30 min): ${longActivities.length}
Najbardziej kaloryczna aktywność: ${mostIntense.type.toUpperCase()} (${mostIntense.calories} kcal)
------------------------------------
`;

console.log(report);