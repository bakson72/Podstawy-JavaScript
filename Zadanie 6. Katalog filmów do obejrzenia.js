const movies = [
    {title: "Arrival", category: "sci-fi", rating: 8.1, watched: true},
    {title: "Whiplash", category: "drama", rating: 8.5, watched: false},
    {title: "Dune", category: "sci-fi", rating: 8.0, watched: false},
    {title: "Inside Out", category: "animation", rating: 8.1, watched: true}
];

const unwatchedMovies = movies.filter(movie => !movie.watched);
// console.log(unwatchedMovies)

const highRatedMovies = movies.filter(movie => movie.rating > 8.0)
// console.log(highRatedMovies)

const highRatedTitles = highRatedMovies.map(movie => movie.title)

console.log("--- RAPORT FILMOWY ---");

console.log("Filmy do obejrzenia:");

console.log(unwatchedMovies.map(m => m.title).join(", "));

console.log("\nFilmy z oceną powyżej 8.0:");
console.log(highRatedTitles.join(" | "));

console.log("\nSzczegóły filmów z wysoką oceną:");
highRatedMovies.forEach(m => {
    console.log(`- ${m.title} [${m.category}] Ocena: ${m.rating}`);
});