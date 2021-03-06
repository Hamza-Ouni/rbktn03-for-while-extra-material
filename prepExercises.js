// Exercises
// Basic Requirments
// 1.Summation to n: Let's implement the function sum that takes a single parameter n, and computes the sum of all integers up to n starting from 0, e.g.:
//  function sum(n) { 
//  // TODO: your code here 
//  } 
//  sum(3); // => 6 
//  sum(4); // => 10 
//  sum(5); // => 15
function sum (n){
	var result = 0;
	while (n > 0){
		result = result + n;
		n--;
	}
	return result;
}


// 2.Factorial of n: The factorial of n is the product of all the integers preceding n, starting with 1, e.g.:
//  function factorial(n) { 
//  // TODO: your code here 
//  } 
//  factorial(3); // => 6 
//  factorial(4); // => 24 
//  factorial(5); // => 120
function factorial (n){
	var result = 1;
	while (n > 1){
		result = result * n;
		n--;
	 } 
 	return result;
}


// 3.Repeating a String n Times: Let's write a function called repeatString that takes two parameters: a string str, which is the string to be repeated, and count -- a number representing how many times the string s should be repeated, e.g.
//  function repeatString(str, count) { 
//  // TODO: your code here 
//  } 
//  repeatString('dog', 0); // => '' 
//  repeatString('dog', 1); // => 'dog' 
//  repeatString('dog', 2); // => 'dogdog' 
//  repeatString('dog', 3); // => 'dogdogdog'
// Your task is to implement the repeatString function using a while loop.

function repeatString(string, count){
	var str = "";
	while (count > 0){
		
		str = str + string ;
		count --;
	
	}
	return str;
}


// More Practice
// 1.Go back through any of the exercises done in the introduction to repetition and refactor them to use the while loop.
function fib(n){
    var a = 0;
    var b = 1;
    var c;
    while (n > 0){
        c = a + b;
        a = b;
        b = c;
         n--;
        }
        return c;
}


function multiplyBy10(number, n){
	var a =10;
	while (n > 0){
		number = a * number;
		n--;
	}
	return number;
}



function sum (start, end){
	var result = 0;
	while(start < end){
		result = result + start;
		start++ ;
	}
	return start;
}



function sum (start, end){
	var result = 0;
	while(start <= end){
		result = result + start;
		start++ ;
	}
	return result;
}



	function product(start, end){
		var result = 1;
		while(start <= end){
			result = result * start;
			start++ ;
		}
		return result;
	}


function inc(x) {
  return x + 1;
}
function dec(x) {
  return x - 1;
}

function add(x, y){
	while(b > 0){
		x = inc(x);
		y = dec(y);
	}
	return x;
}


function isEven(n){
   while(n > 0){
   	 return (n % 2 ===0);
   }
}



// 2.Fencepost Loop: Use a while loop to build a single string with the numbers 1 through n, separated by commas. Have it return the new string. How can we make sure not to have a comma after the last number?
//  function counting(n) { 
//        // TODO: your code here 
//  } 
//  counting(5); // => '1, 2, 3, 4, 5' 
//  counting(1); // => '1' 
//  counting(3); // => '1, 2, 3'

function counting(n){
   var string1 = "1";
   var i =2;
   var string2="";
	while (i <= n){
		string2 = string2 + "," + " " + i;
		i++;
    }
    return string1 + string2 ;
}

// 3.Meet & Greet: n numbers are coming to a party for numbers. Introduce them each to all the guests as they arrive. You should end up with output looking something like this one for n = 5:
//  welcome 1 
//  welcome 2, meet 1 
//  welcome 3, meet 1 and 2 
//  welcome 4, meet 1, 2 and 3 
//  welcome 5, meet 1, 2, 3 and 4
// HINT: search for which symbol that creates a line break in a string.

function meetAndGreat(n){
var string1 = "welcome 1";
var string2 = "welcome 2, meet 1";
var i =3;
var string = "";
	while (i <= n){
	string = string + "welcome" + " " + i + "," + " " + "meet" + counting(n) + "and" +" "+ i + "\n";
i++;
    }
    return string1 + "\n" + string2 + "\n" + string ;
}

// 4.Reverse String: Write a function that takes a string as an input and returns the reverse of that string.
//  function reverseString(str) { 
//        // TODO: your code here 
//  } 
//  reverseString('hello'); // => 'olleh' 
//  reverseString('1#*$'); // => '$*#1'
// Do this using a while loop.

function reverse (string){
	var string1 = "";
	var i = string.length;
	while (i > 0){
      string1 = string1 + string[string.length-1];
      string = string.slice(0,-1);
      i--;
	}
	return string1;
}


// 5.Write a javascript program to print all Prime numbers from 1 to n.
function primeNumber(n){

	while (n > 0){
		n % 2 != 0;
		n % 3 !=0;
		n++;
}
return n;
}



// 6.Write a JavaScript for loop that will iterate from 0 to n. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
// Sample Output : 
//  '0 is even' 
//  '1 is odd' 
//  '2 is even'

function oddOrEven (n){
	for (var i = 0 ; n > 0 ; n++){
		return (n % 2 === 0);
	}
}



// 7.Write a javascript program to enter any number and print all factors of the number.





// Advanced
// 1. Write a javascript function to find the sum of first and last digit of any number, without convert it to string
//  firstAndLast(456) ==> 4 + 6 = 11 
//  firstAndLast(123) ==> 1 + 3 = 4 
//  firstAndLast(197) ==> 1 + 7 = 8




// 2.Write a javascript program to draw the stars
//      * 
//     *** 
//    ***** 
//   ******* 
//  ********* 
//   ******* 
//    ***** 
//     *** 
//      *



// 3. Write a program that reads a character for playing the game of Rock-Paper-Scissors. If the character entered by the user is not one of 'P', 'R' or 'S', the program keeps on prompting the user to enter a new character.