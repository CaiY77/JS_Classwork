/*
Cai Yang
Febuary 9, 2019
Loops Exercise
*/

console.log("Printing 0 to 50 in increments of 5.");

for(var i = 0 ; i <= 50; i+=5){
	console.log(i);
} // Prints 0 to 50 in increments of 5


console.log("Printing 10 to 0 in incrememnts of 1.");
for (var i = 10; i >= 1; i--){
	console.log(i);
}


console.log("Printing multiples of 3 under 60 starting at 6.");
for (var i = 6; i <=60; i+=3){
	console.log(i);

	if (i%2 == 0){
		console.log("EVEN!");
	} else {
		console.log("ODD!");
	}

}
