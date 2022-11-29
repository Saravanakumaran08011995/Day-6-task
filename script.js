/* Debugging - Write a code to print the numbers in the array
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = “”;
 
for (var i = 1; i < 11; i--) {
 new_string += numsArr[i] 
}
console.log(new_string);

Expected Output
1234567891011
*/
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < 11; i++) {
 new_string += numsArr[i] 
}
console.log("Question 1")
console.log(new_string);

/*
Output
1234567891011
*/

/* Debugging - Write a code to print the numbers in the array
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = “”;
 
for (var i = 1; i < 11; i++) {
 new_string += numsArr[i] + , 
}
console.log(new_string);

Expected Output
1,2,3,4,5,6,7,8,9,10,11
*/
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
for (var i = 0; i < 11; i++) {
 new_string += numsArr[i]+ "," ;
}
var last_index = new_string.lastIndexOf(",");
new_string = new_string.substring(0, last_index);
console.log("Question 2")
console.log(new_string);

/* Output
Question 2
1,2,3,4,5,6,7,8,9,10,11
*/

/* Debugging - Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
var new_string = “”;
 
for (var i = 11; i > 0; i — ) {
 new_string += numsArr[i] + “ “ 
}
console.log(new_string);

Expected Output
11 10 9 8 7 6 5 4 3 2 1

*/

var new_string = "";
for (var i = 11; i > 0; i -- ) {
 new_string += i + " "  
}
var last_index = new_string.lastIndexOf(" ");
new_string = new_string.substring(0, last_index);
console.log("Question 3")
console.log(new_string);

/* Output
Question 3
11 10 9 8 7 6 5 4 3 2 1 
*/

/* Debugging - Write a code to replace the array value — If the number is even, replace it with ‘even’.
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = odd
 }
}
console.log(numsArr);

Expected Output
[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]
*/
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = "even"
 }
}
console.log("Question 4")
console.log(numsArr);

/*
Output
Question 4
[1, 'even', 3, 'even', 5, 'even', 7, 'even', 9, 'even', 11]
*/

/* Debugging - Write a code to replace the array value — If the index is even, replace it with ‘even’.
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = even
 }
}
console.log(numsArr);

Expected Output
 [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]
*/

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 != 0 )
 {
 numsArr[i] = "even"
 }
}
console.log("Question 5")
console.log(numsArr);

/*
Question 5
['even', 2, 'even', 4, 'even', 6, 'even', 8, 'even', 10, 'even']
*/

/* Debugging - Write a code to add all the numbers in the array
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 var sum;
 sum += numsArr[i]
}
console.log(sum);

Expected Output
66
*/

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0 ;
for (var i = 0; i <=10; i++) {
 sum += numsArr[i]
}
console.log("Question 6");
console.log(sum);

/*
Output
Question 6
66
*/

/* Debugging - Write a code to add the even numbers only
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <10; i++) {
 if(numsArr[i]%2==0);
 sum += numsArr[i]
}
console.log(sum);

Expected Output
30
*/

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <10; i++) {
 if(numsArr[i]%2==0){
    sum += numsArr[i]
 }
}
console.log("Question 7")
console.log(sum);

/*
Output
Question 7
30
*/

/* Debugging - Write a code to add the even numbers and subract the odd numbers
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2!=0);
 {
 sum += numsArr[i]
 }
 else
 {
 sum -= numsArr[i]
 }
}
console.log(sum);

Expected Output
94
*/

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2 == 0)
 {
 sum += numsArr[i]
 }
 else
 {
 sum -= numsArr[i]
 }
}
console.log("Question 8")
console.log(sum);

/*
Question 8
94
*/

/* Debugging - Fix the code to get the largest of three.
aa = (f,s,t) => {
 let f,s,t;
 console.log(f,s,t);
 if(f>s &&f>t){
 console.log(f)}
 else if(s>f && s>t){
 console.log(s)}
 else{
 console.log(t)}
}
aa(1,2,3);
*/

aa = (f,s,t) => {
    console.log("Question 9")
    console.log(f,s,t);
    if(f>s &&f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else{
    console.log(t)}
   }
   aa(1,2,3);

/*
Output
Question 9
1 2 3
3
*/

/* Debugging - Fix the code to Sum of the digits present in the number
let n = 123;
console.log(add(n));
function add(n)
{
let sum = 10;
for(var i=0;i<n.length;i++){
 sum+=n[i]
 }
 return sum;
}
*/
let n = 123;
var s = n.toString()
console.log("Question 10")
console.log(add(n));
function add(n)
{
let sum = 0;
for(var i=0;i<s.length;i++){
 sum+=parseInt(s[i])
 }
 return sum;
}
/*
Output
Question 10
6
*/
 
/* Debugging -- Fix the code to Sum of all numbers using IIFE function
const arr = [9,8,5,6,4,3,2,1];
(function() {
 let sum = 0;
 for (var i = 0; i <= arr.length; i++);{
 sum += arr[i];
 }
 console.log(sum);
 return sum;
})();
*/

const arr = [9,8,5,6,4,3,2,1];
(function() {
 let sum = 0;
 for (var i = 0; i < arr.length; i++){
 sum += parseInt(arr[i]);
 }
 console.log("Question 11")
 console.log(sum);
 return sum;
})();

/*
Output
Question 11
38
*/
 
/* Debugging - Fix the code to gen Title caps.
var arr = [“guvi”, “geek”, “zen”, “fullstack”];
var ano = function(arro) {
 for (var i = 0; i <= arro.length; i++) {
 console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
 }
}
ano();
*/

var arro = ["guvi", "geek", "zen", "fullstack"];
console.log("Question 12")
var ano = function(arro) {
 for (var i = 0; i < arro.length; i++) {
    console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
 }
}
ano(arro);

/* Output
Question 12
Guvi
Geek
Zen
Fullstack
*/

/* Debugging - Fix the code to return the Prime numbers
const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=2;i<=num;i++){
 if(num%i===0)
 {
 return true;
 }
 }
 return num===1;
});
console.log(myPrime);
*/
