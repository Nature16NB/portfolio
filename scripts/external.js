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

    if ( number1 < number2 ) {
        document.getElementById("Larger").innerHTML="The 2nd number is larger than the 1st one.";
    } 
    else if ( number1 > number2 ) {
        document.getElementById("Larger").innerHTML="The 1st number is larger than the 2nd one.";
    }
    else if( number1 == number2 ) {
        document.getElementById("Larger").innerHTML="Both the numbers are equal"
    }

}

// JavaScript Exercise 2- Finding the sign of the product of three numbers

function signOfProduct() {
    
    let number1 = '8';
    let number2 = '2';
    let number3 = '-3';
    let product = [number1 * number2 * number3];
    
    console.log('The sign is', product);

}

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














function signOfProduct() {
    
    let number1 = parseInt( Math.sign (prompt ('Enter the 1st Number.')));
    let number2 = parseInt( Math.sign (prompt ('Enter the 2nd Number.')));
    let number3 = parseInt( Math.sign (prompt ('Enter the 3rd Number.')));

    if ( number1 * number2 * number3) {
        document.getElementById("Signs").innerHTML="The sign is still unknown, code unfunctional"
    }
    
}