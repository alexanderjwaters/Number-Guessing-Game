
/* 
   Guess Number JavaScript 
   Programmer: Alex Waters
*/

var usersNumber, randomNumber, parsed, randomParsed;

// Starts console logging to keep track of program
function init(){
    console.log("Page loaded and DOM is ready");
}

// This function checks users number and 
// sets random number
function CheckNumber(){

    // Create random number
    let randomNumber = Math.floor((Math.random() * 10) + 1);

    // Store users number
    console.log("Passing Users Number through CheckNumber function");
    usersNumber = inputField.value;

    // parse users number to integer and display in console
    console.log("Parsing Number to integer");
    parsed = parseInt(usersNumber);
    console.log("Users Number Parsed = " + parsed);

    // parse random number to intger and display in console
    randomParsed = parseInt(randomNumber);
    console.log("Random Number = " + randomNumber);
    
    // Make sure users input is 1 - 10
    if(parsed > 0 && parsed < 11){

        console.log("Users Number is Correct Value between 1 - 10");
        
        // if users number is equal to, less than, or  
        // greater than display in console and clear  
        // #inputField in document
        if(parsed === randomParsed){

            console.log("Numbers match user is a winner");
            Match();
        }
        else if(parsed < randomParsed){

            console.log("Users Number is Less Than Random Number");
            LowNumber();
        }
        else{
    
            console.log("Users Number is Greater Than Random Number");
            HighNumber();
        }// ends inside if else
    }
    else{
        
        console.log("Users Number is InCorrect Not between 1 - 10");
        
        // Shows alert to get correct input
        GetCorrectNumber();
    }// end if else

}

// This function displays to user correct input and
// clears inputField
function GetCorrectNumber(){

    window.alert("Number must be 1 - 10");
    let resultField = document.querySelector("#inputField").value = "";

}

// This method resets inputField and result and displays
// winner in for loop
function Match(){

    let resultField = document.querySelector("#result").innerHTML =
                        "";

    document.querySelector("#inputField").value = "";
    console.log("Winner winner Chicken Dinner"); 
    
    // display 20 winner winner chk dinners in div #result
    for(let i = 0; i < 20; i++){
        resultField = document.querySelector("#result").innerHTML +=
        "Winner! Winner! Chicken Dinner! ";
    }

    window.alert("Winner! Winner! Chicken Dinner!");
}

// This function clears resultField and inputField
// displays 20 times too low of number in for loop
function LowNumber(){

    let resultField = document.querySelector("#result").innerHTML =
                        "";

    document.querySelector("#inputField").value = "";
    console.log("Low Number");

    // display 20 too low in div #result
    for(let i = 0; i < 20; i++){
        resultField = document.querySelector("#result").innerHTML +=
                        "Close, But Too Low! ";
    }

    window.alert("Try Again: ( Too Low )");

}

// This function resets resultField and inputField then
// displays 20 times in for loop too high of number
function HighNumber(){

    let resultField = document.querySelector("#result").innerHTML =
                        "";

    document.querySelector("#inputField").value = "";
    console.log("High Number");

    // display 20 too high in div #result
    for(let i = 0; i < 20; i++){
        esultField = document.querySelector("#result").innerHTML +=
                       "Close, But Too High! ";
    }

    window.alert("Try Again: ( Too High )");

}