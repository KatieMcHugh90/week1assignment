//1
let ages =[3, 9, 23, 64, 2, 8, 28, 93, 99]; {
    let accumulator = [0]
    console.log(accumulator - [-1]);
    
}

//2
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
var avgName=0;
for (i = 0; i < names.length; i++){
    avgName = avgName + names[i].length
}
  console.log(avgName / names.length);
  console.log(names.join(" ")); 


// 3. -1
// 4. index 0

//5, 6

let namesArray = ["Kelly", "Sam", "Kate"];
let nameLengths = [5, 3, 4] 

let sum = nameLengths.reduce(function(accumulator, currentValue) {
return accumulator + currentValue;
});
 console.log(sum);



//7
function multipleWords(word,n) {
    let tempword = ""; 
    for (let i = 0; i < n; i++);{
        tempword += word;
    }
    return tempword; } 
    {
console.log(multipleWords("Hello",3)); }

//8

function fullName(firstName, lastName)  {
    console.log(firstName + " " + lastName);
}
fullName('Katie', 'McHugh'); 

     
// 9

let array1;
function arraySum(array1)
{ for (i = 0; i < array1; i++)
   {array1 = array[i].length};

    if (array1 > 100) {
        return true} 
         else {
             return false}; 
    }  console.log(arraySum([2, 4, 6, 8, 10])); 

    // 10

    const average = (array) => array.reduce((a, b) => a + b) / array.length;

    console.log(average([1,2,3,4,5,6,7,8]));


    // 11

    let array3;
    let array4;
    function arrayAbove(array1, array2) { 
        {
        for (let i = 0; i < array3; i++) {array3 = array3[i] / array3.length};
    }{ for (let i = 0; i < array4; i++) {array4 = array4[i] / array4.length};
    if (array3 > array4) { return true}
    else { return false};
} 
    }
    console.log(arrayAbove([1, 2, 3, 4], [1, 2, 3]));

    //12 I had a really hard time understanding this one. I know this is incorrect. 

    function willBuyDrink() {  
      if (moneyInPocket >= 10.50) {
          return "true";}
          Boolean(isHotOutside = true)
      }
     
        
    
    isHotOutside= true 
    moneyInPocket = 20

    //13
    function coffeeOrder(milk, flavor, coffee, name){
        console.log(milk, flavor, coffee, name);

    }
    coffeeOrder('Skim',  'Caramel', 'Espresso', "Katie");

    // This code could be an easy and fast way to identify someone's coffee order online. 

    
    