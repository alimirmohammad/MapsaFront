var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filteredNumbers = numbers.filter((number, index) => {
    if (number >= 4) {
        return true;
    } else {
        return false;
    }
}).map((number) => {
    return number * 2;
})
console.log(filteredNumbers);