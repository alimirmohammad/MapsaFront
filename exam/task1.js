var n = 5;
for(var i = 0; i < n; i++) {
    var line = '*';
    if (i <= Math.floor(n / 2)) {
        for (var j = 0; j < n; j++) {
            if(j < i)line += '0';
            else if(j < n - i)line += '*';
            else line += '0';
        }
    } else {
        for (var j = 0; j < n; j++) {
            if(j < n - i - 1)line += '0';
            else if(j < i + 1)line += '*';
            else line += '0';
        }
    }
    line += '*';
    console.log(line);
}

// Alternative

// var n = 5;
// for(var i = 0; i < n; i++) {
//     var line = '*';
//     if (i <= Math.floor(n / 2)) {
//         for (var j = 0; j < i; j++) {
//             line += '0';
//         }
//         for (var k = i; k < n - i; k++) {
//             line += '*';
//         }
//         for (var m = n - i; m < n; m++) {
//             line += '0';
//         }
//     } else {
//         for (var j = 0; j < n - i - 1; j++) {
//             line += '0';
//         }
//         for (var k = n - i - 1; k < i + 1; k++) {
//             line += '*';
//         }
//         for (var m = i + 1; m < n; m++) {
//             line += '0';
//         }
//     }
//     line += '*'
//     console.log(line);
// }

// Mont
// var n = 5;
// for(var i = 0; i < n; i++) {
//     var line = '*';
//     if (i < n / 2) {
//         for (var j = 0; j < i; j++) {
//             line += '0';
//         }
//         for (var j = 0; j < n - 2 * i; j++){
//             line += '*';
//         }
//         for (var j = 0; j < i; j++) {
//             line += '0';
//         }
//     } else {
//         for (var j = 1; j < n - i; j++) {
//             line += '0';
//         }
//         for (var j = 0; j < 2 * (i + 1) - n; j++){
//             line += '*';
//         }
//         for (var j = 1; j < n - i; j++) {
//             line += '0';
//         }
//     }
//     line += '*';
//     console.log(line);
// }