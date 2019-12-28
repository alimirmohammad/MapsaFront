var n = 5;
for(var i = 0; i < n; i++){
  var line = '';
  for(var j = 0; j < n - i; j++){
    line += '*';
  }
  console.log(line);
}
