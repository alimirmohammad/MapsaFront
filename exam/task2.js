// var n = 5;
// var lastNum = 0;
//
// for(var i = 0; i <= (n-1)/2; i++){
//     line = '';
//     for (var j = 0; j < i; j++) {
//         line += '0';
//     }
//     for (var k = i; k < n - i; k++) {
//         lastNum++;
//         line += lastNum;
//     }
//     for (var m = n - i; m < n; m++) {
//         line += '0';
//     }
//     console.log(line);
// }

// Mont
var n = 5;
var num = 0;

for(var i = 0; i < n / 2; i++) {
    var line = '';

    for (var j = 0; j < i; j++) {
        line += '0';
    }
    for (var j = 0; j < n - 2 * i; j++) {
        num++
        line += num;
    }
    for (var j = 0; j < i; j++) {
        line += '0';
    }
    console.log(line);
}