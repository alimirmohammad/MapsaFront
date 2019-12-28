// task 2

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
