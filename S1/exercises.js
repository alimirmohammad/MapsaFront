// task 1

/*
var n = 7;
for(var i = 0; i < n; i++){
  var line = '';
  if(i <= Math.floor(n/2)){
    for(var j = 0; j < i; j++){
      line += ' ';
    }
    for(var k = i; k < n - i; k++){
      line += '*';
    }
  } else {
    for(var j = 0; j < n - i - 1; j++){
      line += ' ';
    }
    for(var k = n - i - 1; k < i + 1; k++){
      line += '*';
    }
  }
  console.log(line);
}
*/

// task 2

/*
var n = 5;

for(var i = 0; i < n; i++){
  var line = '';
  if(i === 0 || i === n - 1){
    for(var j = 0; j < n; j++){
      line += '*'
    }
  } else {
    line += '*';
    for(var k = 1; k < n - 1; k++){
      line += ' ';
    }
    line += '*';
  }
  console.log(line);
}
*/

// task 3

/*
var n = 9;

for(var i = 0; i < n; i++){
  var line = '';
  if(i === 0 || i === n - 1){
    for(var j = 0; j < n; j++){
      line += '*'
    }
  } else if (i === Math.floor(n/2)){
    line += '*';
    for(var l = 1; l < Math.floor(n/2); l++){
      line += ' ';
    }
    line += '*';
    for(var m = Math.floor(n/2) + 1; m < n - 1; m++){
      line += ' ';
    }
    line += '*';
    }
   else {
    line += '*';
    for(var k = 1; k < n - 1; k++){
      line += ' ';
    }
    line += '*';
  }
  console.log(line);
}
*/
