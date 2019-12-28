// task 1

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
