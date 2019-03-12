function reverse(str) {
	let splitstr;
  let backwards;
  let answer;

  splitstr = str.split("");

  backwards = splitstr.reverse();

  newstr = backwards.join("");

  return newstr;
} // function

let str = "Hello World!";
console.log(reverse(str));
