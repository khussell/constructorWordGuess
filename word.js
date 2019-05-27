//connecting to letter.js Letter constructor
var Letter = require("./letter.js")

//word constructor to hold info for each word in game
var Word = function (word) {
    //guesses left for word that is in play
    this.guessesLeft = 10;
    //array that will store an instance of Letter for each letter in word that is in play
    this.lettersArr = [];
    //looping through word that is in play and making an instance of Letter to be pushed into lettersArr
    this.letterLoop = function () {
        for (var i = 0; i < word.length; i++) {
            this.lettersArr.push(new Letter(word[i]))

        }
    }
    //function that will loop through lettersArr of Letter instances for the word and will return how the letter will be displayed to the user through the Letter constructors display function
    this.displayWord = function (display) {
        for (var i = 0; i < this.lettersArr.length; i++) {
            //for each letter it will be added to display as either the letter itself or "-"
            display += this.lettersArr[i].display()
        }
        return display
    }
    //when user letter guess is passed in it will be checked with the lettersArr to see if there is a match, if so the letter property for if its been guessed will be set to true
    this.makeGuessTrue = function (userLetter) {
        var trueOrFalse = false;
        for (var i = 0; i < this.lettersArr.length; i++) {
            if (this.lettersArr[i].letter === userLetter) {
                this.lettersArr[i].hasLetterBeenGuessed()
                trueOrFalse = true;
            }
        }
        //if letter is still set to false it is not a letter in word in play so guessesLeft --
        if (trueOrFalse === false) {
            this.guessesLeft--
            if(this.guessesLeft === 1){
                console.log("Wrong, you have 1 guess left")
            }else{
            console.log(`Wrong, you have ${this.guessesLeft} guesses left`)
            }
            //if guesses left is 0 user loses and we will exit game 
            if(this. guessesLeft === 0){
                console.log("Sorry you lost!!!")
                process.exit();
            }
        } else {
            //make user aware they have answered correctly
            console.log("Correct")
        }
    }

}



//export Word to index
module.exports = Word;