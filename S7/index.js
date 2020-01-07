// spread operator

/*
const person = {
    first_name: "Mohammad",
    last_name: "Montazeri"
};

// ES5

const person_info = {
    mobile: "09196258221",
    telegram: "@iMont",
    first_name: person.first_name,
    last_name: person.last_name
};

person.first_name

// ES6

const person_info = {
    mobile: "09196258221",
    telegram: "@iMont",
    ...person
};

person_info.first_name

// Alternative

const person_info = {
    mobile: "09196258221",
    telegram: "@iMont",
    person: person
};

person_info.person.first_name

// Alternative ES6

const person_info = {
    mobile: "09196258221",
    telegram: "@iMont",
    person
};

person_info.person.first_name*/

 let counter = 0;

 function increaseCounter(initialCounter = null){
     counter++;
     if(initialCounter === 0 || initialCounter){
         counter = initialCounter;
     }
     document.getElementById('counter').innerText = counter;
 }

 increaseCounter(0);