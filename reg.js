/*
Cai Yang
Febuary 13, 2019
Register Challange
*/

function register(cost,cash){
  let change = cash-cost;
  let counter = 0;

console.log(`Your change is $${change}: `)

    while(change >= 100){
      change -= 100;
      counter++;
    } // 100$
    console.log(`${counter} 100$ bills!`);

    counter = 0; //reset counter
    while(change >= 50){
      change -= 50;
      counter++;
    } // 50$
    console.log(`${counter} 50$ bills!`);

    counter = 0; //reset counter
    while(change >= 20){
      change -= 20;
      counter++;
    } // 20$
    console.log(`${counter} 20$ bills!`);

    counter = 0; //reset counter
    while(change >= 10){
      change -= 10;
      counter++;
    } // 10$
    console.log(`${counter} 10$ bills!`);

    counter = 0; //reset counter
    while(change >= 5){
      change -= 5;
      counter++;
    } // 5$
    console.log(`${counter} 5$ bills!`);

    counter = 0; //reset counter
    while(change >= 1){
      change -= 1;
      counter++;
    } // 1$
    console.log(`${counter} 1$ bills!`);

    counter = 0; //reset counter
    while(change >= .25){
      change -= .25;
      counter++;
    } // 0.25$
    console.log(`${counter} quarters!`);

    counter = 0; //reset counter
    while(change >= .10){
      change -= .10;
      counter++;
    } // 0.10$
    console.log(`${counter} dimes!`);

    counter = 0; //reset counter
    while(change >= .05){
      change -= .05;
      counter++;
    } // 0.05$
    console.log(`${counter} nickels!`);

    counter = 0; //reset counter
    while(change >= .01){
      change -= .01;
      counter++;
    } // 0.01$
    console.log(`${counter} pennies!`);

  }// register function

  register(28.1,200); // call function 
