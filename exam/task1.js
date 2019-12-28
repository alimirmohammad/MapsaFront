var n = 5;
for(var i = 0; i < n; i++) {
    var line = '*';
    if (i <= Math.floor(n / 2)) {
        for (var j = 0; j < i; j++) {
            line += '0';
        }
        for (var k = i; k < n - i; k++) {
            line += '*';
        }
        for (var m = n - i; m < n; m++) {
            line += '0';
        }
    } else {
        for (var j = 0; j < n - i - 1; j++) {
            line += '0';
        }
        for (var k = n - i - 1; k < i + 1; k++) {
            line += '*';
        }
        for (var m = i + 1; m < n; m++) {
            line += '0';
        }
    }
    line += '*'
    console.log(line);
}