var Letter = require("./letter.js")


var Word = function (word) {
    this.guessesLeft = 10;
    this.lettersArr = [];
    this.letterLoop = function () {
        for (var i = 0; i < word.length; i++) {
            this.lettersArr.push(new Letter(word[i]))

        }
    }
    this.displayWord = function (display) {
        for (var i = 0; i < this.lettersArr.length; i++) {
            display += this.lettersArr[i].display()
        }
        return display
    }
    this.makeGuessTrue = function (userLetter) {
        var trueOrFalse = false;
        for (var i = 0; i < this.lettersArr.length; i++) {
            if (this.lettersArr[i].letter === userLetter) {
                this.lettersArr[i].hasLetterBeenGuessed()
                trueOrFalse = true;
            }
        }
        if (trueOrFalse === false) {
            this.guessesLeft--
            console.log(`Wrong, you have ${this.guessesLeft} guesses left`)
        } else {
            console.log("Correct")
        }
    }

}




module.exports = Word;