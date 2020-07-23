// Chapter # 38-42
//Task 1

//Task6


//Task 7

// var text = prompt('Enter the string to count two vowels in succession : ');
// var answer = countVowels(text);

// document.write('The vowels in succession are ' + answer + ' times');


// function countVowels(str) {
//     debugger;
//   var count = 0;
//   for (var i = 1; i < str.length; i++) { 
//     switch (str[i]) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         if (str[i] === str[i - 1]) {
//           count++;
//         }
//         break;

//       default:
//         break;
//     }
//   }
//   return count;
// }

//Task 8

//var distance = Number(prompt("Enter distance between two cities(in km)"));

//Hint: 1 km = 1000 meters, 1 meter = 3.28 feet, 1 foot = 12 inches, foot = 30 centimeters


// function distanceInMeters(distance){
 
//     var m = distance * 1000;
//     document.write("Distance in meters " + m + " m<br/>");

// }

// function distanceInFeet(){
//     var f = distance * 1000 * 3.28;
//     document.write("Distance in feets " + f + " feet<br/>");    

// }

// function distanceInInches(){
//     var i = distance * 1000 * 3.28 * 12;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
//     document.write("Distance in inches " + i + " inches<br/>");    

// }

// function distanceInCentiMeters(){
//  var cm = distance * 1000 * 3.28 * 12 * 30;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
// document.write("Distance in centimeters " + cm + " cm<br/>");  

// }

// distanceInMeters(distance);
// distanceInFeet(distance);
// distanceInInches(distance);
// distanceInCentiMeters(distance);

//Task 9

// var workingHours = parseInt(prompt("Enter working hours of employee"));

// var overTimeRate = 12;
// var overTimePay, overTimeHour;                                                                                                                                                                                                              

// if(workingHours > 40)
// {
//     overTimeHour = workingHours - 40;
//     overTimePay = overTimeHour * 12;
//     document.write(overTimePay);
// }
// else{
//     document.write("No OverTime, working hours is: " + workingHours + " hrs");
// }

//Task 10
// var amount = parseInt(prompt("Enter amount to withdraw!!"));

// function currencyNotes(amount){
//     document.write("You will have " + parseInt(amount/100) + " hundred note(s) ");     
//     document.write(parseInt((amount % 100) / 50) + " fifty note(s) ");
//     document.write(parseInt((((amount % 100) % 50) / 10)) + " ten note(s). ");
// }

// currencyNotes(amount);