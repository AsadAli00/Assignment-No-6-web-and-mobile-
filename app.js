//chapter No 21-25

//Task no 1

var firstname = prompt("Enter Your First Name");
var lastname = prompt("Enter Your Last Name");
var Fullname = firstname + " " + lastname;
alert(Fullname);


//Task no 2

var userinput = prompt("Enter Your favorite mobile phone model");
var len = userinput.length;
document.write("Length of String is "+len);


//Task no 3

var str = "Pakistani"
var strindex = str.indexOf("n");
document.write("String:"+ str+ "<br>");
document.write("Index of 'n'"+ strindex);


//task no 4 


var str1 = "Hello World";
var str1index = str1.lastIndexOf("l");
document.write("String:"+ str1+ "<br>");
document.write("Index of 'l'"+ str1index);


//Task no 5 


var a = "Pakistani";
var indexchar = a.charAt(3);
document.write("String:"+a+ "<br>");
document.write("Index of '3' " + indexchar);


//Task no 6


var firstname = prompt("Enter Your First Name");
var lastname = prompt("Enter Your Last Name");
var Fullname = firstname.concat(lastname);


//Task no 7 


var city = "Hyderabad"
newcity = city.replace("Hyder","Islam");
document.write("string :" +city +"<br>");
document.write("After Replacement : " + newcity);



//Task no 8



var message = "Ali and Sami are best friends. They play cricket and football together.";
for (var i =0; i<message.length; i++){
    if(message.slice(i,i+3) === "and"){
        message = message.slice(0,i) + "&" + message.slice(i+3);
    
    }
}
document.write("message : "+ message);





//Task no 9 



var value = "472"
document.write("value:"+value+ "<br>");
document.write("Type: String <br>");
var value1 = parseInt(value);
document.write("value:"+value1+" <br>");
document.write("Type: number");



//Task no 10 


var user = prompt("Enter any string");
var upperuser = user.toUpperCase();
document.write("UserInput:" + user);
document.write("Upper Case: " + upperuser);




//Task no 11

var a = "javascript";
for(var i =0; i<= a.length; i++){
    if(a.slice(i,i+1) === "j"){
        b = "J"+a.slice(i+1)
    }
}
document.write("User input: "+a+"<br>");
document.write("Title Case: "+b);



//Task no 12 
 var num = 35.36;
var newnum = num.toString();
newnum = newnum.replace(".","");
 document.write("Number: "+ num+"<br>");
 document.write("Result: "+ newnum);

 //Task no 13 


var userinp = prompt("Enter text");

userinp = userinp.charCodeAt();   
if(userinp === 33 || userinp === 44 || userinp === 46 || userinp ===64){
    alert("Please enter a valid username");
}


//Task no 14

var a =["cake", "apple pie","cookie","chips","patties"];
var b = prompt("Welcome to our Bakery. What do you want to order sir/ma'am?");
b = b.toLowerCase();
for (var i=0; i<= a.length; i++){
    if(a[i] === b){
        document.write(b+ " is available at index " +i+ " in our bakery");
    }

    else{
        document.write("We are sorry "+ b+ " is not available in our bakery")
    }


}



//task no 15 

    
var pass = prompt("Enter Password:");
if (pass.length === 6 ){
    alert("correct format")
}
else{
    alert("password can not begin  with a number <br> please Enter a valid password");
}



//Task no 16 
var arr;
var university = "University Of Karachi"
arr = university.split('');
document.write(arr);





//Task no 17
var i = prompt("Enter some text");
var o = i.substr(-1);
document.write("User Inpu: "+ i+"<br>");
document.write("Last character: "+ o);




//Task no 18

var count = 0;
var x ="the quick brown fox jumps over the lazy dog"
console.log(x.length)
for(var i=0; i<=x.length; i++){
   if (x.slice(i,i+3)  === "the"){
      count =count + 1;
   }
}
document.write("Text: "+ x +" <br>");
document.write("There are " +count+" occurance(s) of word 'the' ");





//Chapter NO 26-30



//Task no 1


var num = prompt("Enter any positive integer Number");
var round = Math.round(num);
var flor = Math.floor(round);
var ciel = Math.ceil(flor);
document.write("Number : " +num+" <br>");
document.write("Round of value " +round+" <br>");
document.write("Floor value : " +flor+" <br>");
document.write("ceil value : " +ciel+" <br>");



//Task no 2



var num = prompt("Enter any negative float Number");
var round = Math.round(num);
var flor = Math.floor(round);
var ciel = Math.ceil(flor);
document.write("Number : " +num+" <br>");
document.write("Round of value " +round+" <br>");
document.write("Floor value : " +flor+" <br>");
document.write("ceil value : " +ciel+" <br>");



//Task No 3

var val = -4;
var ans =Math.abs(val);
document.write("The absolute value  of "+val + " is "+ ans)




//Task no 4

var dice = (Math.random()* 5)+1;
dice = Math.round(dice);
document.write("Random Dice value: "+ dice);





//Task no 5

var coin = (Math.random() *1) + 1;
coin = Math.round(coin);
if(coin === 2){
   document.write(coin+"<br> random coin value: head");
} 
else{
   document.write(" 1 <br> random coin value: tail");

}



//Task no 6

var ran = (Math.random() * 100) +1;
ran = Math.round(ran);
document.write("Random Number Between 1 and 100 : "+ran);


//Task No 7

var user = prompt("Enter your Weight in kilograms");
user = parseInt(user);
document.write("The Weight of user is : "+user+ " Kilogram");



//Task no 8 

var rand = (Math.random() * 9) + 1;
rand = Math.round(rand);
console.log(rand);
var usr = +prompt("Enter a Number between 1 and 10");
if (rand === usr){
   document.write("Congratulation");
}
else{
   alert("Try Again!");
}




//Chapter N0 31-34


//Task No 1

var x = new Date();
document.write(x);



//Task No 2


var d =new Date();
var m = d.getMonth();
var arr = ["january","februray","march","april","may","june","july","august","september","october","november","december"]
alert("Month : "+arr[m]);




//Task No 3


var d = new Date();
var x = d.toString();
var c = x.slice(0,3);
document.write("Today is: "+c);





//Task no 4


var d = new Date();
var x = d.toString();
if(x.slice(0,3)=== "Sat" || x.slice(0,3) === "Sun"){
    document.write("It's Fun day");
}
else{
    alert("sorry")
}


//Task no 5 


var n = new Date();
var x = n.toString();
if(x.slice(9,11) <= "16"){
    document.write("First Fifteen of the month")
}
else{
    document.write("Last Days of the month");
}




//Task no 6 

var d = new Date();
var mili = d.getTime();
console.log(d)
var min = mili/60;
document.write("Current Date: "+d+"<br>");
document.write("Elapsed Milliseconds since january 1,1970 = "+ mili+"<br>");
document.write("Elapsed Minute since january 1,1970 = "+ min);


//Task No 7

var d =new Date();
var c =d.toString();
if(c.slice(16,18) <= "24" ){
    document.write("It's PM");
}
else{
    document.write("It's Am");
    
}


//Task No 8

var laterDate = new Date("Dec 31, 2020")
document.write("Later Date : "+ laterDate);


//Task no 9


var Current = new Date();
var ramzandate = new Date("June 18,2015");
var Currenttime = Current.getTime();
var ramzantime = ramzandate.getTime();
var result = Currenttime - ramzantime;
result = result/(1000*60*60*24*30)
document.write(result+" days have passed since 1st Ramazan,2015");


//Task no 10


var c = new Date();
var ctime = c.getTime();
var d = new Date("Dec 05,2015");
var dtime = d.getTime();
var res = ctime - dtime ;
res = res/100;
document.write("On reference Date: " + d+"<br>")
document.write(res+" seconds had passed since beginning of 2015");


//Task no 11



var d  = new Date();
var x = d.getTime();
x = x - 3600000;
var e = new Date(x);
document.write("Current Date: "+d +"<br>");
document.write("1 Hour ago, it was : "+e);


//Task no 12


var d  = new Date();
var x = d.getTime();
x = x - (1000*60*60*24*30*12*101)
var e = new Date(x);
document.write("Current Date: "+d +"<br>");
document.write("100 Year back, it was : "+e);




//Task no 13


var user = prompt("Enter Your age");
var d = new Date();
var t = d.getTime();
var y = t - (1000*60*60*24*30*12*user);
var newdate = new Date(y);
var convert =  newdate.toString();
convert = convert.slice(11,15);
document.write("Your Age is = "+ user+"<br>");
document.write("Your Birth year is "+ convert);


//Task no 14



var name  = "ABC coustomer";
var month = "June";
var units = 200;
var chargeunit = 20;
var netammount = units * chargeunit;
var latecharges = 300;
var gross_ammount = netammount + latecharges ;
document.write("Customer Name: "+name+"<br>");
document.write("Month : "+month+"<br>");
document.write("Number Of Units: "+units+"<br>");
document.write("Charge per Units: "+chargeunit+"<br><br>");
document.write("Net Ammount payable (within Due Date) : "+netammount+"<br>");
document.write("Gross Ammount payable (After Due Date) : "+gross_ammount+"<br>");



//Chapter no 35-38


//Task no 1 
function date_time(){
    var d =new Date();
    return d
}
document.write(date_time());



//Task no 2 


function full_name(firstname,lastname){
   return firstname + " " + lastname 
}
alert(full_name("Asad","Ali"))




//Task no 3

function add(val1,val2){
    return val1 +val2
}
document.write("Addtion is: "+ add(+prompt("enter you 1st value"),+prompt("enter your 2nd value")));



//Task no 4

function calc(num1,num2,opr){
    if(opr === "+"){
        return num1 + num2;
    
    }
    else if(opr === "-"){
        return num1 - num2;
    }
    else if(opr === "*"){
        return num1 * num2;
    }
    else if (opr === "/"){
        return num1 / num2;
    }
    else{
        return "Your Operator is incorrect"
    }
}
document.write(calc(2,4,"+"));



//Task no 5


function sqr(val){
    return val * val;
}
document.write(sqr(2));



//task no 6


function fact(num){
    if(num === 0 || num === 1){
        return 1
    }
    for(var i =num-1;i>=1;i--){
        num *= i;
    }
    return num

}
document.write("Factorial is : "+fact(prompt("Enter any Number")))



//task no 7 

function count(num1,num2){
    for(var i= num1; i<=num2; i++){

        document.write(i+"<br>");
    }
}
document.write(count(1,10));




//Task no 8

function hypotenuse(base,prep){
    function square(x){
        return x*x ;        
    }
    return Math.sqrt(square(base) +square(prep))

   
}
document.write(hypotenuse(3,4))



//Task no 9


function area1(w = 3, h = 4){
    return  w*h;
}
document.write("Arguments as value Area: "+area1()+"<br>")
function area2(w,h){
    return w*h;
}
document.write("Argument as variable Area : "+area2(3,4));




//Task no 10


function palindromecheck(word){
    var check="";
    for(var i = word.length -1 ; i >= 0; i--){
        check += word[i]
    }
    if(check === word){
      return  document.write(word + " is palindrome word");
    }
    else {
       return document.write(word + " is not palindrome word");
    }

}
document.write(palindromecheck(prompt("Enter any word")));


//Task no 11


function uppr(str){
    for(var i =0; i< str.length; i++){
        if(str.charAt(i) === " "){
            str = str.slice(0,1).toUpperCase()+ str.slice(1,i)+ str.charAt(i+1).toUpperCase() + str.slice(i+2); 
        }
        
    }
    return str
}

document.write(uppr("my name is asad"));


//Task no 12



function check(statement){
    for(var i=0; i<=statement.length; i++){
        if(statement.slice(i) === " "){

        }
    }
}




//Task no 13

function char_count(str,letter){
    var letter_count = 0;
    for(var i =0; i< str.length; i++){
        if(str.charAt(i) === letter){
            letter_count +=1;
        }
    }
    return letter_count;
}
document.write("number of letter count is: "+ char_count(prompt("Enter any string "),prompt("Enter any letter you want to check count")));



//Task no 14


function calcCircumference(radius){
    return document.write("The Circumference is "+ (2 * 3.142 * radius)+"<br>")
}

document.write(calcCircumference(4));
function calcArea(radius){
    return document.write("The Area is " + (3.142 * (radius * radius)));
}
document.write(calcArea(4));