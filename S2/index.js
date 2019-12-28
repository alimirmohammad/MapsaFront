// square stars

/*
var n = 3, line = '';

for(var i = 0; i < n; i++){
  for(var j = 0; j < n; j++){
    line += '*';
  }
  line += '\n';
}
console.log(line)
*/

// square too khali

/*
var n = 5, line = '';

for(var i = 0; i < n; i++){
  for(var j = 0; j < n; j++){
    if(i == 0 || i == n - 1){
      line += '*';
    } else {
      if(j == 0 || j == n - 1){
        line += '*';
      } else {
        line += ' ';
      }
    }
  }
  line += '\n';
}
console.log(line)
*/

// square too khali 2

/*
var n = 5, line = '';

for(var i = 0; i < n; i++){
  for(var j = 0; j < n; j++){
    if(i > 0 && i < n - 1 && j > 0 && j < n - 1){
      line += ' ';
    } else {
      line += '*';
    }
  }
  line += '\n';
}
console.log(line)
*/

// object

/*
var person = {
  first_name: 'Ali',
  last_name: 'Mirmohammad',
  telegram: '@ali_mmhd',
  email: 'ali.mirmohammad.86@gmail.com'
}

console.log('He is ' + person.first_name + ' ' + person.last_name
+ '. His telegram: ' + person.telegram + ', Email: ' + person.email);
*/

var persons = [
  {
    first_name: 'Ali',
    last_name: 'Mirmohammad',
    telegram: '@ali_mmhd',
    email: 'ali.mirmohammad.86@gmail.com'
  },
  {
    first_name: 'Reza',
    last_name: 'Mirmohammad',
    telegram: '@reza_mmhd',
    email: 'reza.mirmohammad@gmail.com'
  }
]

/*
for(var i = 0; i < persons.length; i++){
  console.log('He is ' + persons[i].first_name + ' ' + persons[i].last_name
  + ', Telegram: ' + persons[i].telegram + ', Email: ' + persons[i].email + '.');
  console.log(`He is ${persons[i].first_name} ${persons[i].last_name}, Telegram: ${persons[i].telegram}, Email: ${persons[i].email}.`)
}
*/


var personsHtml = '';
persons.forEach((person) => {
  personsHtml += `<div>
      <h2>${person.first_name} ${person.last_name}</h2>
      <div>
        <span>Email: </span>
        <span>${person.email}</span>
      </div>
      <div>
        <span>Telegram: </span>
        <span>${person.telegram}</span>
      </div>
    </div>`
})

document.getElementById('persons').innerHTML = personsHtml;
