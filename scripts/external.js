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

}

// JavaScript Exercise 3- Least to Greatest with 3 numbers

function LeastToGreat() {
      
    let number1 = parseInt(prompt ('Enter the 1st Number.'));
    let number2 = parseInt(prompt ('Enter the 2nd Number.'));
    let number3 = parseInt(prompt ('Enter the 3rd Number.'));
    let answer = "";

    // If number 1 is lesser than numbers 2 and 3 and number 2 is lesser than number 3. The order would be num1, num2, num3.
    if ( number1 < number2 && number1 < number3 && number2 < number3) {
        answer = number1.toString() + " " + number2.toString() + " " + number3.toString() + " ";
    }
    
    // If number 1 is lesser than numbers 2 and 3 but number 2 is greater than number 3. The order would be num1, num3, num2.
    else if (number1 < number2 && number1 < number3 && number2 > number3) {
        answer = "Your 1st number is the least greatest, followed by your 3rd number, and lastly, your 2nd number being the largest";
    }

    // If number 1 is lesser than number 2 but is greater than number 3, along with number 2 greater than number 3. The order would be num3, num1, num2. 
    else if (number1 < number2 && number1 > number3 && number2 > number3) {
        answer = "Your 3rd number is the least greatest, followed by your 1st number, and lastly, your 2nd number being the largest";
    } 

    // If number 1 is lesser than number 3 but is greater than number 2, along with number 3 greater than number 2. The order would be num2, num1, num3.
    else if (number1 < number3 && number1 > number2 && number3 > number2) {
        answer = "Your 2nd number is the least greatest, followed by your 1st number, and lastly, your 3rd number being the largest";
    }

    // If number 2 is lesser than numbers 1 and 3 but is number 1 is greater than number 3. The order would be num2, num3, num1.
    else if (number2 < number3 && number2 < number1 && number1 > number3) {
        answer = "Your 2nd number is the least greatest, followed by your 3rd number, and lastly, your 1st number being the largest";
    }

    // If number 3 is lesser than numbers 1 and 2 but number 1 is greater than number 2. The order would be num3, num2, num1.
    else if (number3 < number1 && number3 < number2 && number1 > number2) {
        answer = "Your 3rd number is the least greatest, followed by your 2nd number, and lastly, your 1st number being the largest";
    }

    else {
        answer = 'Invalid character unable to process';
    }
    document.getElementById("LTG").innerHTML = answer;

}   

// JavaScript Exercise 4- Using For Loop Functions

function forSumThrees() {
    let threesumunder1000 = 0;

    for(let a = 0; a < 1000; a += 3) {
    }
    if (a % 3 === 0) {
    }
    threesumunder1000 += a;
    alert (threesumunder1000);
}

// JavaScript Exercise 5- Using While Loop Functions

function whileSumThrees() {
    let threesumunder1000 = 0;
    let a = 0
    
    while (a < 1000) {
        threesumunder1000 += a;
        a = a + 3;
        alert (threesumunder1000)
    }
}

// JavaScript Exercise 6- Finding multiples of 10 and 4

function tenFour() {
    let a = 0;

    while (a < 100)
    a = a + 1;

    if (a % 4 === 0 && a % 10 === 0) {
        return ("TenFour!");
    }
    
    else if (a % 4 === 0) {
        return ('Four');
    }

    else if (a % 10 === 0) {
        return ('Ten');
    }
    
    else if (a % 4 !== 0 && a % 10 !== 0) {
        return ('This number is no multiple of 4 or 10.');
    }
}

// JavaScript Exercise 7- Which century are you in?

function centuryFromYear() {
    let year = prompt ('Enter your year here.')
    let century = (year % 100) + 1
        alert (century);
}

// JavaScript Exercise 8- Finding the Third Angle

function thirdAngle() {
    let angle1 = prompt ('Enter your first angle here.')
    let angle2 = prompt ('Enter your second angle here.')
    sum = angle1 + angle2

    if (sum < 180 && sum > 0) {
        a = 180 - sum
        alert (a);
    }
    else {
        alert ('The stuff that you entered seems invalid. Try to add some numbers with only positivity in it for the button to work :)')
    }
    
}

// JavaScript Encryption: Will take a message full of letters, numbers and symbols, and converts into a cipher text message for the user to see.

// Any messages will be encrypted by using the first letter of the word as the last letter of the word and the last letter as the first.

function Encrypt() {

    let normaltext = prompt ("Please enter your message into the box:");
    let cipheredtext = "";
    let firstletter = "";
    let lastletter = "";
    
    normaltext = normaltext.replace (" ");
    for ( let a = 0; a < normaltext.replace; a = a + 1) {
        if (normaltext[a].replace > 1) {
            firstletter = normaltext[a][1-57];
            lastletter = normaltext[a][0];
            cipheredtext += (normaltext[a].replace(1,));
            cipheredtext += lastletter + normaltext + firstletter;
        } 

        else {
            cipheredtext += (normaltext[a])
        }
    }
}

// Takes a certain ciphered message and tries to reverse the changes made to the original word. 
  function Decrypt() {
      
    let cipheredtext = prompt("Please enter your encrypted message: ");
    let normaltext = "";
    let cipher = cipheredtext.replace (" ");

    for ( let a = 0; a < cipheredtext)
  }




  function unpigified(){
    // (Unfinished) Takes a ciphertext message, alters it by reversing the changes made in the pigified() function, and returns the plaintext to the user
    let ciphertext = prompt("Enter your encrypted message:");
    let plaintext = "OopA! This function has not been written yet";
    let cipherList = ciphertext.split(" ");
    for( let i = 0 ; i < cipherList.length ; i = i + 1 ){ // for each word in the plaintext, do the following
      }
    }
    document.getElementById("decrypted").innerHTML = plaintext;

  