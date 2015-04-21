/* Code by Collin Mullis
	Program to use Newton's Law of Cooling to figure out Rate of Cooling
	All Temperature Variables are stored in Degrees Celsius
	All Time Variables are stored in Minutes
	April 21st 2015
*/

// Variable for Surrounding "Room Temperature"

a = 5 

// Variable for Intial or Starting Temperature of Soup (0 Variable)

i = 100 

// Variable for storing Temperature after "t" time

T = 60 

// Variable for time in Minutes

t = 10 

// Function to subtract Room Temp from Initial
//var sub = function(a, i) {
//	return i - a;
//  }

// Function to get Natural Log of numbers
//var ln = function(a) {
//	return Math.log(a) 
//	}

// Test to return "e" constant
// console.log(Math.E)

// Test for e to the x power
//var exp = function(t) {
//	return Math.exp(t)
//}
//console.log(exp(t))

coolingLaw = function(a, i, T, t) {
	function sub(i,a) {
		return i - a
	}
	var one = sub(i, a)
	function equal(T, a) {
		return T - a 
	}
	var two = equal(T, a)
	function divi(two, one) {
		return two / one
	}
	var three = Math.pow(divi(two, one), -1)
	function ln(three) {
		return Math.log(three)
	}
	var four = ln(three)
	function divide(four, t) {
		return four / t
	}
	var k = divide(four, t) 
	return k
}
console.log(coolingLaw(a, i, T, t));
