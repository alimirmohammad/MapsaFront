// Classes

const a = {
    first_name: "Mohammad",
    last_name: "Montazeri"
};

const b = {};

b.__proto__ = a;

console.log(b.first_name);    // Mohammad