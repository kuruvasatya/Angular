var scores = [1, 2, 2, 37, 8, 24, 67, 6, 8, 2, 54, 5, 54];
var avg = 0;
var sum = 0;
for (var i = 0; i < scores.length; i++) {
    sum += scores[i];
}
console.log("Sum of scores is " + sum);
for (var _i = 0, scores_1 = scores; _i < scores_1.length; _i++) {
    var score = scores_1[_i];
    sum += score;
}
avg = sum / scores.length;
console.log(avg);
if (avg < 10) {
    console.log("poor");
}
else if (avg < 30) {
    console.log(avg);
}
else {
    console.log("good");
}
