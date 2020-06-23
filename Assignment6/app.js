// Chapter # 21-25
//Task 1
// var firstName = prompt("Enter first name");
// var lastName = prompt("Enter last name");
// var fullName = firstName + " " + lastName;
// document.write("Welcome " + fullName.toUpperCase());

//Task 2
// var mobileModel = prompt("Enter mobile model.");
// document.write("My favourite phone is: " + mobileModel + "<br>");
// document.write("Length of string: " + mobileModel.length);

//Task 3
//  var word = "Pakistani";
//  document.write("String: " + word + "<br/>");
//  document.write("Index of 'n': " + word.indexOf("n"));

//Task 4
//  var word = "Hello World";
//  document.write("String: " + word + "<br/>");
//  document.write("Index of 'l': " + word.lastIndexOf("l"));

//Task 5
//  var word = "Pakistani";
//  document.write("String: " + word + "<br/>");
//  document.write("Character at index 3: " + word.charAt(3));

//Task 6
// var firstName = prompt("Enter first name");
// var lastName = prompt("Enter last name");
// var fullName = firstName.concat( " " +lastName);
// document.write("Welcome " + fullName.toUpperCase());

//Task 7
// var city = "Hyderabad";
// var str = city.replace("Hyder","Islam");
// document.write("City: " + city + "<br/>");
// document.write("After replacement: " + str);

//Task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// message = message.replace(/and/g,"&");
// document.write(message);

//Task 9
// var str = "472";
// var num = Number(str);

// document.write("Value: " + str + "<br/>");
// document.write("Type: " + typeof str + "<br/>");
// document.write("Value: " + num + "<br/>");
// document.write("Type: " + typeof num); 

//Task 10
// var userInput = prompt("Enter input");
// document.write("User input: " + userInput + "<br>");
// document.write("Upper case: " + userInput.toUpperCase());

//Task 11
//  var userInput = prompt("Enter input");
//  document.write("User input: " + userInput + "<br>");
//  document.write("Title case: " + userInput.charAt(0).toUpperCase() + userInput.slice(1));

//Task 12
// var num = 35.36;
// document.write("Number: " + num + "<br>");
// document.write("Result: " + num.toString().replace(".",""));

//Task 13
//  var username = prompt("Enter username");
//  var regularExpression =  /[\@\.\,\!]/;
//  if(username.match(regularExpression)===null){
//     document.write("Valid username: " + username + "<br>");
//  }
//  else{
//      document.write("Please enter a valid username: " + username);
//  }

//Task 14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var input = prompt("Welcome to Online Bakery. What do you want to order sir/ma`am?");

// input = input.toLowerCase();
// if(A.indexOf(input) == -1)
// {
//     document.write("We are sorry. " + input + " is <b>not available</b> in our bakery");
// }
// else 
// {
//  document.write(input + " is <b>available</b> at index " + A.indexOf(input.toLowerCase()) + " in our bakery");
// }



//Task 15
// var passsword = prompt("Enter the password");

// var regularExpression =  /^(?=.*[0-9])[A-Za-z]\w{5,}$/;


// if(passsword.match(regularExpression))
// {    
//     document.write("It is a valid password");    
// } 
// else
// {
//     passsword = prompt("Enter a valid password");      
// }


//Task 16
//   var university = "University of Karachi";
//   document.write(university.split('').join('<br>'));

//Task 17
// var input = prompt("Enter any string");
// document.write("User input: " + input + "<br>");
// document.write("Last character of input: " + input.charAt(input.length -1));

//Task 18
// var string = "The quick brown fox jumps over the lazy dog";
// var count = (string.match(/the/gi)).length; 
// document.write("Text: " + string + "<br/>");
// document.write("There are " + count + " occurrence(s) of the word 'the'");


// Chapter # 26-30
//Task 1
// var num  =  Number(prompt("Enter a positive integer"));
 
// document.write("number: " + num + "<br/>");
// document.write("round off value: " + Math.round(num) + "<br/>"); 
// document.write("floor value: " + Math.floor(num) + "<br/>");
// document.write("ceil value: " + Math.ceil(num));

//Task 2
// var num  =  parseFloat(prompt("Enter a positive integer"));
 
// document.write("number: " + num + "<br/>");
// document.write("round off value: " + Math.round(num) + "<br/>"); 
// document.write("floor value: " + Math.floor(num) + "<br/>");
// document.write("ceil value: " + Math.ceil(num));


//Task 3
// var num =  Number(prompt("Enter a number")); 
// document.write("The absolute value of " + num + " is " + Math.abs(num));

//Task 4
// var dice1 = Math.floor( Math.random() * 6 ) +1;
// document.write("random dice value: " + dice1 + "<br/>");
// var dice2 = Math.floor( Math.random() * 6 ) +1;
// document.write("random dice value: " + dice2);
 
//Task 5
// var dice1 = Math.floor( Math.random() * 2 ) +1;
// document.write(dice1 + "<br/>");
// if(dice1 == 2){
//     document.write("random coin value: Head <br/>");
// }
// else
// {
//     document.write("random dice value: Tails <br/>");
// }

//Task 6
//  var num = Math.floor( Math.random() * 100 ) + 1;
//  document.write("random number between 1 and 100: " + num + "<br/>");

//Task 7
//  var weight = prompt("Enter you Weight in kilogramss"); 
//  document.write("The weight of user is " + parseFloat(weight) + " kilograms" );  

//Task 8
// var secretNum = Math.floor( Math.random() * 10 ) + 1;
// var userNum = Number(prompt("Enter a number between 1 and 10"));
// if(userNum == secretNum){
//     document.write("Congratulations");
// }
// else
//   document.write("Try again!");


// Chapter # 31-34
//Task 1
// var date = new Date(); 
// document.write("current date: " + date +"<br/>"); 
 
//Task 2
// var  monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];
// var date = new Date();
// document.write("Current month: " + monthNames[date.getMonth()]);

//Task 3
// var  weekDays = ["Sun","Mon","Tue", "Wed", "Thu", "Fri", "Sat"];
// var date = new Date();
// document.write("Today is " + weekDays[date.getDay()]);

//Task 4
// var today = new Date();
// if(today.getDay() == 6 || today.getDay() == 0) 
//    document.write("It's Fun day");

//Task 5
// var date = new Date();
 
// if (date.getDate() < 16)
// {
//    document.write("First fifteen days of the month")
// }
// else
// {
//   document.write("Last days of the month");
// }

//Task 6
// var date = new Date();
// var date2 = new Date(0);
// document.write("Current Date: " + date + "<br/>");  
// var currentMonth = date.getMonth();
// var milliSeconds = date.getTime();
// document.write("Elapsed milliSeconds since January 1, 1970: " + milliSeconds + "<br>");
// var minutes = milliSeconds * 60 ;
// document.write("Elapsed Minutes since January 1, 1970: " + minutes); 

//Task 7
// var date = new Date();
//   if(date.getHours() >= 12){
//     document.write("It's PM");
//   } 
//   else     
//    document.write("It's AM");

//Task 8
// var laterDate = new Date(2020,11,31);
// document.write("Later date: " + laterDate);

//Task 9
// var RamadanDate = new Date("June 18 2015 00:00:00");
// var currentDate = new Date();  
// var timeDiff = currentDate.getTime() - RamadanDate.getTime();
// var days = timeDiff / (1000 * 60 * 60 * 24);
// document.write(Math.round(days) + " days have passed since 1st Ramadan, 2015");

//Task 10
// var refDate = new Date("Dec 05 2015 22:50:16");
// var date = new Date("Jan 01 2015"); 
//   var diff =  (refDate.getTime() - date.getTime()) ;
//   diffsec = diff/(60 * 60 * 24);
//   diff = diff / diffsec;  
//  document.write("On reference date " + refDate + " , <br> " + diff + " seconds had passed since beginning of 2015");
 

//Task 11
// var date = new Date(); 
// document.write("current date: " + date +"<br/>"); 
// date.setHours(date.getHours() - 1);
// document.write("1 hour ago,it was " + date);

//Task 12
// var date = new Date(); 
// document.write("current date: " + date +"<br/>"); 
// date.setFullYear(date.getFullYear() - 100);
// document.write("100 years back , it was " + date);


//Task 13
// var age = parseInt(prompt("Enter your age"));
// var date = new Date();
// date.setFullYear(date.getFullYear() - age);
// document.write("Your age is " + age + "<br/>");
// document.write("Your birth year is " +  date.getUTCFullYear());


//Task 14
// var CustomerName = prompt("Enter name");
// var currentMonth = prompt("Enter Month");
// var noofunits = Number(prompt("Enter Units"));
// var chargeofunits = Number(prompt("Enter Unit charges"));

// var surcharge =  Number(prompt("Enter surcharge amount"));
// var netAmount = noofunits * chargeofunits;
// var grossAmount = netAmount +  surcharge;

// document.write("<h1> K-Electric Bill </h1>");
// document.write("Customer Name: " + CustomerName.toUpperCase() + "<br>" );
// document.write("Month: " + currentMonth + "<br>");
// document.write("Number of units: " + noofunits + "<br>");
// document.write("Charges per units: " + chargeofunits + "<br><br>");
// document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>");
// document.write("Late payment surcharge: " + surcharge + "<br>");
// document.write("Gross Amount Payable (after Due Date): " + grossAmount + "<br>"); 



// Chapter # 35-38
//Task 1 
// var date = new Date();  
// function currentDate() {    
//     return date;
//   }  
//   document.write( currentDate() );

//Task 2
// var firstName = prompt("Enter first name");
// var lastName = prompt("Enter last name");

// function name(a, b) {
//        var fullName = firstName + " " + lastName;
//        return fullName.toUpperCase();
//     }

//   document.write("Welcome " + name(firstName,lastName));
    
//Task 3
// var num1 = Number(prompt("Enter any number"));
// var num2 = Number(prompt("Enter any number"));

// function sum(a, b){
//     return a + b;
//     }

//     document.write("Sum: " + sum(num1,num2));

//Task 4

// var Firstnumber = Number(prompt("Enter First number"));
// var Secondnumber = Number(prompt("Enter Second number"));
// var Operation =   prompt("Enter one mathematical operator like (+, -, *, /, %)"); 

// function calculator(Firstnumber, Secondnumber, Operation){    
//     if(Operation == "+")
//     {
//         var sum = Firstnumber + Secondnumber;
//         document.write("Addition"+"<br>"+"<br>");     
//         document.write("First Number is: " + Firstnumber+"<br>");     
//         document.write("Second Number is: " + Secondnumber+"<br>");     
//         document.write(Firstnumber + Operation + Secondnumber +" is " + sum);    
//     }
//     else if (Operation == "-")
//     {
//         var sub = Firstnumber - Secondnumber;
//         document.write("Subtraction"+"<br>"+"<br>");    
//         document.write("First Number is: " + Firstnumber+"<br>");
//         document.write("Second Number is: " + Secondnumber+"<br>");
//         document.write(Firstnumber + Operation + Secondnumber +" is " + sub);      
//     }
//     else if(Operation == "*")
//     {
//         var mul =  Firstnumber * Secondnumber;
//         document.write("Multiplication"+"<br>"+"<br>");    
//         document.write("First Number is: " + Firstnumber+"<br>");    
//         document.write("Second Number is: " + Secondnumber+"<br>");    
//         document.write(Firstnumber + Operation + Secondnumber +" is " + mul);     
//     }
//     else if(Operation == "/")
//     {
//         var divide =  Firstnumber / Secondnumber;
//         document.writeln("Division"+"<br>"+"<br>");    
//         document.writeln("First Number is: " + Firstnumber+"<br>");    
//         document.writeln("Second Number is: " + Secondnumber+"<br>");    
//         document.writeln(Firstnumber + Operation + Secondnumber +" is " + divide);        
//     }
//     else if(Operation == "%")
//     {
//         var mod =  Firstnumber % Secondnumber;
//         document.write("Modulus"+"<br>"+"<br>");    
//         document.write("First Number is: " + Firstnumber+"<br>");     
//         document.write("Second Number is: " + Secondnumber+"<br>");     
//         document.write(Firstnumber + Operation + Secondnumber +" is " + mod);        
//     }
//     else
//     {
//         document.write("Mathematical operation is not valid!");
//     }
    
// }

// document.write(calculator(Firstnumber, Secondnumber, Operation));



//Task 5
//  function square (num) { 
//      return num * num; 
//     }

//Task 6
// var num = Number(prompt("Enter a Number"));

// function factorial(n) {    
//     return n ? n * factorial(n - 1) : 1;
//   }
  
//   document.write( factorial(num));


//Task 7
// var startNum = Number(prompt("Enter start number"));
// var endNum = Number(prompt("Enter end number"));

// function count(num1, num2){     
     
//     for (i = num1; i <= num2; i++) { 
//       //  sum += i;
//         document.write(i + " ");
//     }
// }

//  count(startNum, endNum);


//Task 8 
// var Base = Number(prompt("Enter Base"));
// var Perpendicular = Number(prompt("Enter Perpendicular"));

// function calculateSquare (num) { 
//          return num * num; 
//         }

//         function calculateHypotenuse(num1, num2){           
//           return Math.sqrt(calculateSquare(num1)  + calculateSquare(num2)) ;
//         }
 
//    document.write("Hypotenuse of a right angle triangle: " + calculateHypotenuse(Base, Perpendicular).toFixed(2));

//Task 9
// var w = Number(prompt("Enter width"));
// var h = Number(prompt("Enter height"));

// function area(width, height)
// {
//     w = 5;
//     h = 10;
//     return width * height;
// }

// document.write("Area of a rectangle: " + area(w,h) + "<br/>");
// document.write("Inside function calling: " + w +" , "+ h);
 
//Task 10
// var str = prompt("Enter palindrome  word, phrase, or sequence");

// function palindrome(str) {
//     var expression = /[\W_]/g;
//     var FwdStr = str.toLowerCase().replace(expression, '');
//     var reverseStr = FwdStr.split('').reverse().join(''); 
//     return reverseStr === FwdStr;
//   }

//   if(palindrome(str))
//   {
//     document.write(str + ": A passed string is a palindrome");
//   }
//   else
//     document.write(str + ": A passed string is not a palindrome");


//Task 11
// var str = prompt("Enter any string");

// function titleCase(str) {  
//     str = str.toLowerCase().split(' ');
  
//     for(var i = 0; i < str.length; i++){
//       str[i] = str[i].split('');
//       str[i][0] = str[i][0].toUpperCase(); 
//       str[i] = str[i].join('');
//     }
//     return str.join(' ');
//   }  

//   document.write("EXAMPLE STRING : " + str + "<br>" );
//   document.write("EXPECTED OUTPUT : " + titleCase(str) + "<br>" );


//Task 12
// function longestWord(str)
// {
//   var arr = str.match(/\w[a-z]{0,}/gi);
//   var result = arr[0];

//   for(var x = 1 ; x < arr.length ; x++)
//   {
//     if(result.length < arr[x].length)
//     {
//     result = arr[x];
//     } 
//   }
//   return result;
// } 

// var str = prompt("Enter any string");
// document.write("EXAMPLE STRING : " + str + "<br>" );
// document.write("EXPECTED OUTPUT : " + longestWord(str) + "<br>" );


//Task 13
// function charcount(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

 
// var str = prompt("Enter any string");
// var letter = prompt("Enter any letter");
// document.write("Sample arguments : " + str + " , " + letter + "<br>" );
// document.write("Character count : " + charcount(str, letter) + "<br>" ); 


//Task 14
// var rad = Number(prompt("Enter Radius"));

// function calcCircumference(radius){
//     return (2 * Math.PI * radius).toFixed(3) ;
// }

// function calcArea(radius)
// {
//    return (Math.PI * radius * radius).toFixed(3);
// }

// document.write("The circumference is: " + calcCircumference(rad) + "<br/><br/>");
// document.write("The area is: " + calcArea(rad));
 


 



 

 