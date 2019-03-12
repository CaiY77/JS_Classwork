/*
Cai Yang
Febuary 9, 2019
Letter Grade: Bonus
*/

var grade = -100;

if (grade >= 100){
  console.log("You got over 100! A++?")
} // Over 100


if (grade >= 90){

  if (grade >= 96){
    console.log("You got an A+!");
  } // A+
  else if(grade >= 93){
    console.log("You got an A!");
  } // A
  else {
    console.log("You got an A-!");
  } // A-

} // Over 90, Under 100


else if(grade >= 80){

  if (grade >= 86){
    console.log("You got an B+!");
  } // B+
  else if(grade >= 83){
    console.log("You got an B!");
  } // B
  else {
    console.log("You got an B-!");
  } // B-

} // Over 80, Under 90


else if(grade >= 70){

  if(grade >= 76){
    console.log("You got a C+...");
  } // C+
  else if(grade >= 73){
    console.log("You got a C...");
  } // C
  else {
    console.log("You got a C-...");
  } // C-

} // Over 70, Under 80


else if(grade >= 55){
  console.log("You got a D...");
}
else if(grade < 55 && grade >= 0){
  console.log("You got a... I mean you failed.");
}
else {
  console.log("How did you get a negative grade...?");
}
