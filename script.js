var jobTitle  = "student";
var geolocation  = "Ontario";
var salary = "30K-60K";
var company = "Rogers";

document.getElementById('ex1').innerHTML = "You will be a " + jobTitle + "in " + geolocation + ", making " + salary + " for " + company + "."; //


const today = new Date();
const birthDate = new Date(1986, 11, 22); 

let age = today.getFullYear()
          - birthDate.getFullYear()

document.getElementById('ex2').innerHTML = age


var currentage = 35;
var maximumage  = 90;
var amountperday = 1;
var totalamount = (maximumage - currentage) * 365 * amountperday;

document.getElementById('ex3').innerHTML = "You will need " + totalamount + " to last you until the ripe old age of " + maximumage + ".";



var radius = 10;
var circumference  = radius * 3.14; 
var area = radius * radius * 3.14;

document.getElementById('ex4').innerHTML = "The circumference is " + circumference + ", and the area is " + area + ".";



var celsius = 10;
var fahrenheit  = (celsius * 9/5) + 32;

document.getElementById('ex5').innerHTML = celsius +"°C is" + fahrenheit + "°F.";


function squareNumber (number) {
    let squareNumber = number * number
    document.getElementById('ex6').innerHTML = "The result of squaring the number " + number + " is " + squareNumber + ".";
    return squareNumber
   
   }
   
   squareNumber (3);


   function halfNumber (number) {
    let halfNumber = number / 2
    document.getElementById('ex7').innerHTML = "Half of " + number + " is " + halfNumber + "."; 
    return halfNumber
   
   }
   
   halfNumber (5);


   function percentOf (number, halfNumber) {
    let percentOf = halfNumber / number * 100
    document.getElementById('ex8').innerHTML = halfNumber + " is 50% of " + number + "."; 
    return percentOf
   
   }
   
    percentOf (4, 2);
 


    function areaOfCircle (radius) {
        let areaOfCircle = radius * 3.14 
        document.getElementById('ex9').innerHTML = "The area for a circle with radius " + radius + " is " + areaOfCircle + "."; 
        return halfNumber
       
       }
       
    areaOfCircle (2);


    
    function runAll (number) {
        let runAll = number / ((number / 2) * (number / 2 ) * 3.14) * 100 
        document.getElementById('ex10').innerHTML = "The percentage of that area is " + runAll + ".";
    }

    runAll (10)