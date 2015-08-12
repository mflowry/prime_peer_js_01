//Start with the number 42 and set that equal to 'value'
var value = 42;

//2. Create condition logic to check if the value is great or equal to 53
if (value>=53) {
	value += 42;
} else {
		value -=13;
	}
console.log("step 2: " +value)
//2-1. If true, add 42 to 'value'
//2-2. If false, subtract 13 from 'value'

//3. Create a string that is set to 11, add it to 'value'
var string = "11"
value += string;
console.log("step 3: " +value)

//4. Create an array, loop through 'value' using charAt, set array[i] to each value
var array = [];
for (i=0; i<value.length; i++){
	array.push(value.charAt(i));

}

console.log("step 4: " + array)
//5. Remove the first and last values off the array
array.shift();
array.pop();

console.log("step 5: " + array)
   var variable = "";
//6. Create a new variable. Loop backwards through the array and store each value into the new Variable, combining each of the values of that array (backwards remember!)
for (i=array.length-1; i>=0; i--) {

   variable += array[i];
  // console.log(variable)
}
console.log("step 6: " + variable);


//7. parseInt both the 'value' and the new variable created in Step 6, ensure that both 'value' and the new variable are set to these new parsed values;
value = parseInt(value);
variable = parseInt(variable);
// ******* SWITCH PROGRAMMERS *******
console.log("step 7: " + value, variable)
// 8. Add 'value' and the new variable created in Step 6 together and store them in 'value'

value = value + variable;
console.log("step 8: " + value)
// 9. If the new value of 'value' is less than 60, set 'value' equal to 14. If not, check to see if it is equal to 2930, if it is, set 'value' equal to 27. 
// If neither of these are true, set the value to 2.

if(value < 60) {
	value = 14;
}
else if(value == 2930){
	value = 27;
}
else {
	value = 2;
}

console.log("step 9: " + value)

// 10. Create a while loop that counts down from 10 and increments 'value' by 1.

var i =10;
while (i>0) {
	value += 1;
	i--;
}
console.log("step 10: " + value)
// 11. Create a function that accepts an argument 'val'. The function should convert 'val' to a String, then drop the first character off the String, but only if there 
// is more than 1 character in the String. Return 'val' and set the 'value' to the returned value.

function convert(val){
	// console.log(typeof val)
	val = val.toString();
	// console.log(val.length);
	
	if (val.length > 0){
	val = (val.slice(1));
	value = val;
	return val;
	}
	// value = val;
	// return val;
}
// 12. Call the function.

convert(value);

// 13. Console log value. Create an index.html file, link the this Javascript file. Load in the browser, check the value.
console.log(typeof value, value);

// 14. Your answer should be a String value that equals 7. Is that what you got?

