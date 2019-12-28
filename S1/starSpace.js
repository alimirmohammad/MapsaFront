var n = 5;
for(var i = 0; i < n; i++){
  var line = '';
  for(var j = 0; j < n - i - 1; j++){
    line += ' ';
  }
  for(var k = n - i; k <= n; k++){
    line += '*';
  }
  console.log(line);
}
