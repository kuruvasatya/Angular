let scores : number[] = [1,2,2,37,8,24,67,6,8,2,54,5,54]
let avg: number = 0;
let sum: number = 0;

for(let i=0; i< scores.length; i++) {
     sum += scores[i];
}

console.log("Sum of scores is " + sum);

for(let score of scores){
    sum += score;
}
avg = sum/scores.length;

console.log(avg);

if( avg < 10) {
    console.log("poor");
}
else if(avg < 30) {
    console.log(avg);
}
else {
    console.log("good")
}