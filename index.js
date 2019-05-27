//connecting to word.js for word constructor and inquirer npm
var Word = require("./word.js")
var inquirer = require("inquirer")
//arr to help with checking user input as a letter
var alphabetArr = ("abcdefghijklmnopqrstuvwxyz").split("")
//word that will be played will be randomly selected from this array
var wordsArr = ['pineapple', 'peach', 'strawberry', 'watermelon', 'papaya', 'grapefruit', 'lemon', 'lime', 'blackberry', 'blueberry', 'banana' ]

//wordNow will store instance of Word for word that is in play
var wordNow;
var displayed = "";
var currentWord= "";

//function to start game
var wordTime = function () {
    //randomly selecting word for play from wordsArr
    var wordIndex = Math.floor(Math.random() * 11)
    //creating instance of Word constructor
    wordNow = new Word(wordsArr[wordIndex])
   
    //function to get display for user of their progress on word
    var getDisplay = function (wordCon) {
        //if there is a word in play
        if (currentWord.length >= 1){
          console.log("Current Word: \n" + wordNow.displayWord(displayed))
          currentWord= wordNow.displayWord(displayed)
        }else{
        //else if there is not a word in play, make arr of letter instances from word
        wordCon.letterLoop()
        console.log("Current Word: \n" + wordNow.displayWord(displayed))
        currentWord = wordNow.displayWord(displayed)
        }
      
    
    }
    //calling getDisplay function and passing in current randomly selected word
    getDisplay(wordNow)
    //use inquirer to ask user to guess a letter
    var getUserInput = function() {
        inquirer.prompt({
            type: "input",
            message: "Guess a letter",
            name: 'userGuessed'
        }).then(function (answer) {
            //with prompt answer userGuess will store the letter and make sure it is lowercase
            var userGuess = answer.userGuessed.toLowerCase()
           
            //if the user guess is a letter
            if (alphabetArr.indexOf(userGuess) >= 0) {
                //go to this function to check if it is in the word in play
                wordNow.makeGuessTrue(userGuess)
                //show progress on word
                getDisplay(wordNow)
                //if word does not have anymore "-" then a new word will be given to play
                if(currentWord.indexOf("-") < 0){
                    console.log("You got it!!! Here is another word!")
                    currentWord= ""
                    displayed= ""
                    wordTime()
                }else{
                //if there is more "-" in word than we will ask them to guess again
                getUserInput()
                }
            }

            //if userGuess is not a letter
            else {
                console.log("That is not a letter.")
                getUserInput()
            }

        })

    }
    getUserInput()
}
wordTime()