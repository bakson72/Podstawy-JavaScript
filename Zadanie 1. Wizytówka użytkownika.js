const user = {
    firstName: "Jakub",
    lastName: "Hyla",
    city: "Kraków",
    age: 23,
    fieldOfStudy: "informatyka",
    hobby: "swimming"
};
console.log(`My name is ${user.firstName} ${user.lastName}`);
console.log(`My hobby is ${user.hobby}`);
if (user.age >= 18){
    console.log("I'm adult")
}
else {
    console.log("I'm underage")
}