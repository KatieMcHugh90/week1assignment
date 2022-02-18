let ages =[3, 9, 23, 64, 2, 8, 28, 93, 99]; {
    let finalElemnt= ages[7];
    const subtract = (finalElement, accumulator) => finalElement - accumulator;
    console.log(ages.reduce(subtract));
    let sum = (329);
    console.log(sum / 9);
}


let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
var avgName=0;
for (i = 0; i < names.length; i++){
    avgName = avgName + names[i].length
}
  console.log(avgName / names.length);
  console.log(names.join(" "));