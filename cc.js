/*
Cai Yang
Febuary 12, 2019
Coding Challange
*/

console.log("Question 1: ");

for(let i = 0; i <= 20; i++){
  if( i % 2 == 0){
    console.log(3*i);
  }
  else {
    console.log(i+3);
  }
}

console.log("Question 2: ");

for(let i = 0; i <= 20; i++){
  if(i % 2 != 0 && i % 3 != 0){
    console.log(i);
  }
}

console.log("Question 3: ");

for (let i = 1; i < 50; i++){
  if(i % 10 == 0){
    console.log("I am the 10th iteration.");
  }
  else if(i % 5 == 0){
    console.log("I am the 5th iteration.");
  }
  else{
    console.log(i);
  }
}

console.log("Question 4: ");

for(let i = 1; i < 10; i++){
  if(i % 2 == 0 && i != 2){
    console.log("EVEN!");
  }
  else if (i % 3 == 0 && i != 3){
    console.log("ODD!");
  }
  else {
    console.log("PRIME!");
  }
}

console.log("Question 5: ");

let paid = 10;
let cost = 4;
let change = paid - cost;
let quarters = 0;
for(let i = change; i > 0; i -= 0.25){
  quarters ++;
}
console.log(`Your change is ${quarters} Quarters`);
