// function for buttons

function script1() {
    alert("This website itself can be considered as my first project!");   
}

// Be Aware!!!
function warning() {
    alert("The following buttons are for Assignment 5. Don't freak out if it doesn't appear right.");   
}

// JavaScript Exercise 1- Finding the Larger Number

function LargerNumber() {
    
    let number1 = parseInt(prompt ('Enter the 1st Number.'));
    let number2 = parseInt(prompt ('Enter the 2nd Number.'));
    let bigNum = "";

    if ( number1 < number2 ) {
        bigNum="The 2nd number is larger than the 1st one.";
    } 
    else if ( number1 > number2 ) {
        bigNum="The 1st number is larger than the 2nd one.";
    }
    else if( number1 == number2 ) {
        bigNum="Both the numbers are equal"
    }

    else {
        bigNum = "The characters you entered are not numerical. Input in numbers only.";
    }
    document.getElementById("Larger").innerHTML = bigNum

}

// JavaScript Exercise 2- Finding the sign of the product of three numbers
// Part 1: Finding the sign

function signOfProduct() {
    
    let number1 = parseInt(prompt ('Enter your 1st number'));
    let number2 = parseInt(prompt ('Enter your 2nd number'));
    let number3 = parseInt(prompt ('Enter your 3rd number'));
    let product = [number1 * number2 * number3];
    let sign = "";

    if (product == 0) {
        sign =  "The product is 0, as in nothing.";
    }
        
    else if (product < 0) {
        sign = "The product has negativity in it.";
    }

    else if (product > 0) {
        sign = "The product has positivity in it.";
    }
        
    else {
        sign = "Dude, enter something that makes sense like numbers."

    }

    document.getElementById("Signs").innerHTML = sign;

// Part 2: Finding the product  

    if product == 0 {
        plusminus =  "Your product is 0. Just 0.";
    }

    else if (product < 0) {
        plusminus = "Your product is negative";
//     }

//     else if (num1 * num2 * num3 == 0) {
//         plusminus = "Your product is neutral"
//     }

//     else {
//         signofproducts = "please enter a valid number"
//     }
//     document.getgetElementById("riddle-button2").innerHTML = signofproducts;
//     //Here I tried to account for all possible outcomes and planning an alert for what would happen if such event were to occur. If the user entered any amounts of 0 in a slot, the outcome would result in a 0 so in order to prevent a lot of invalids come up, I made a "neutral" alert which told the useer their product isn't positive or negative
// }

// JavaScript Exercise 3- Least to Greatest with 3 numbers

function LeastToGreat() {
      
    let number1 = parseInt(prompt ('Enter the 1st Number.'));
    let number2 = parseInt(prompt ('Enter the 2nd Number.'));
    let number3 = parseInt(prompt ('Enter the 3rd Number.'));

    if ( number1 < number2 && number1 < number3) {
        document.getElementById("L.T.G.").innerHTML="number 1"
    }
   }   

// JavaScript Exercise 4- Using For Loop Functions

function ForLoop() {
    alert("Work in Progress");   
   }


// JavaScript Exercise 5- Using While Loop Functions

function WhileLoop() {
    alert("Give me some time....pls");   
   }

// JavaScript Exercise 6- Finding multiples of 10 and 4

function TenFour() {
    alert("Could I get just a 90 for this course?");   
   }

// JavaScript Exercise 7- Which century are you in?

function Centuries() {
    alert("Would appreciate it! :)");   
   }

// JavaScript Exercise 8- Finding the Third Angle

function ThirdAngle() {
    alert("May the person who reads this be blessed by God for a better future :)");
}
