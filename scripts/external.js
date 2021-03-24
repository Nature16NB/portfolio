// function for buttons

function script1() {
    alert("This website itself can be considered as my first project!");   
}

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

// JavaScript Exercise 2-
function signOfProduct() {
    
    let number1 = parseInt( Math.sign (prompt ('Enter the 1st Number.')));
    let number2 = parseInt( Math.sign (prompt ('Enter the 2nd Number.')));
    let number3 = parseInt( Math.sign (prompt ('Enter the 3rd Number.')));

    if ( number1 * number2 * number3) {
        document.getElementById("Signs").innerHTML="The sign is still unknown, code unfunctional"
    }
    
}

// JavaScript Exercise 3-
function LeastToGreat() {
      
    let number1 = parseInt(prompt ('Enter the 1st Number.'));
    let number2 = parseInt(prompt ('Enter the 2nd Number.'));
    let number3 = parseInt(prompt ('Enter the 3rd Number.'));

    if ( number1 < number2 && number1 < number3) {
        document.getElementById("L.T.G.").innerHTML="number 1"
    }
   }   

// JavaScript Exercise 4
function script6() {
    alert("Script 6 coming soon...");   
   }

// JavaScript Exercise 5
function script7() {
    alert("Script 7 coming soon...");   
   }

// JavaScript Exercise 6
function script8() {
    alert("Script 8 coming soon...");   
   }

// JavaScript Exercise 7
function script9() {
    alert("Script 9 coming soon...");   
   }