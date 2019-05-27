var Word = require("./word.js")
var inquirer = require("inquirer")
var alphabetArr = ("abcdefghijklmnopqrstuvwxyz").split("")
var wordsArr = ['hi', 'hello']

var wordNow;
var displayed = "";
var currentWord= "";


var wordTime = function () {
    var wordIndex = Math.floor(Math.random() * 2)
    wordNow = new Word(wordsArr[wordIndex])
   
    var getDisplay = function (wordCon) {
        if (currentWord.length >= 1){
          console.log("Current Word: \n" + currentWord)
        }else{
        wordCon.letterLoop()
        console.log("Current Word: \n" + wordNow.displayWord(displayed))
        currentWord = wordNow.displayWord(displayed)
        }
    
    }
    getDisplay(wordNow)
    var getUserInput = function() {
        inquirer.prompt({
            type: "input",
            message: "Guess a letter",
            name: 'userGuessed'
        }).then(function (answer) {
            var userGuess = answer.userGuessed.toLowerCase()
           
            if (alphabetArr.indexOf(userGuess) >= 0) {
                wordNow.makeGuessTrue(userGuess)
                getDisplay(wordNow)
                getUserInput()
            }


            else {
                console.log("That is not a letter.")
                getUserInput()
            }

        })

    }
    getUserInput()
}
wordTime()