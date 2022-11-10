function square(num) {
    return num * num;
}
function greet(person) {
    if (person === void 0) { person = "stranger"; }
    return "Hi there, ".concat(person, "!");
}
console.log(greet());
