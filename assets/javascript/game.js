

// var computerNumber 
var wins = 0;
var losses = 0;
var guessValue;  // defined this variable, will add a value in the reset()
var computerNumber; // defined this variable, will add a value in the reset()

var button1Value = 0;
var button2Value = 0;
var button3Value = 0;
var button4Value = 0;



// created a function to set guessValue to 0 that can be called inside the reset or on click function
//function guessToZero() {
// var guessValue = 0;



// create a function to assign the random number to buttons
function button1() {
    // creates a random number for the button with a value between 1 and 12
    var randomButtonValue = Math.floor(Math.random() * 13) + 1;
    // selects the id button-1, assigns the attribute (randomButtonValue) to the id data-value
    $("#button-1").attr("data-value", randomButtonValue);
    // just console.log here to make sure the random number is assigned
    console.log("This is the random number assigned to button 1: " + randomButtonValue);
    // set this value to a variable button1
    // var button1Value = randomButtonValue;
};

// copy the above function to create a random number and assign it to each button below
function button2() {
    var randomButtonValue = Math.floor(Math.random() * 13) + 1;
    $("#button-2").attr("data-value", randomButtonValue);
    console.log("This is the random number assigned to button 2: " + randomButtonValue);
};

function button3() {
    var randomButtonValue = Math.floor(Math.random() * 13) + 1;
    $("#button-3").attr("data-value", randomButtonValue);
    console.log("This is the random number assigned to button 3: " + randomButtonValue);
};

function button4() {
    var randomButtonValue = Math.floor(Math.random() * 13) + 1;
    $("#button-4").attr("data-value", randomButtonValue);
    console.log("This is the random number assigned to button 4: " + randomButtonValue);
};

//----------------------------------------------------------------------------------------        
// creat a reset function
function reset() {

    computerNumber = Math.floor(Math.random() * 121) + 19;
    $("#computer-number").text(computerNumber);
    console.log("This is the computers random number " + computerNumber);

    guessValue = 0;
    $("#display-total-guesses").text(guessValue); // what is guessValue here?
    console.log("This is the total score at the beginning of a game " + guessValue);

    $("#win").text("Wins: " + wins);
    $("#loss").text("Losses: " + losses);

    //$("#alert").text(" ");

    button1();
    button2();
    button3();
    button4();
};

// running the reset() here. this will: 
// 1. set the buttons to random numbers, 
// 2. Choose a random number and set it to the computerNumber,
// 3. set the guessValue (score) to 0,
// 4. update the win score,
// 5. udpade the loss score,
//------------------------------------------------------------------------------------

// calling the reset function before letting the user click a button


$(document).ready(function () {

    reset();



    //-----------------------------------------------------------------------------------   
    // start the game with a click on the <div> with the "buttons"
    $(".button-group").on("click", ".button", function () {
        // clearing the "you win" or 'you lose" display on the click 
        // didnt know where else to put it so it would work
        $("#alert").text(" ");
        // clickValue stores the value assigned to the <div> clicked
        var clickValue = $(this).attr('data-value');
        // i changed clickValue from a string into a number with parseInt
        var clickValueNumber = parseInt(clickValue);
        console.log("This is the value from a Button: " + clickValueNumber);
        console.log("this is the computers choice here: " + computerNumber);
        console.log("check this value" + guessValue);
        // adding the clickValueNumer to the existing var guessValue which starts at 0
        guessValue += clickValueNumber
        console.log("check this value" + clickValueNumber);
        console.log("Score (running total): " + guessValue);
        $("#display-total-guesses").text(guessValue);



        if (guessValue == computerNumber) {
            console.log("Winner ,score: " + guessValue + " computerNumber: " + computerNumber);
            $("#alert").text("You Win!!");
            wins++;
            //guessToZero();
            reset(); //where should the reset function go? it establishes the computerNumber.
        }
        else if (guessValue > computerNumber) { //this statement does not execute?
            $("#alert").text("You Lose!!");
            losses++;
            //guessToZero();
            reset();
        }
        //else {
        // }


    });

    //--------------------------------------------------------------------------------------

    // end of the doc.ready function
});
