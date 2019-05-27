//constructor that will be prototype to all letters in the word in play
var Letter = function(letter) {
  //storing letter
  this.letter = letter;
  //storing if letter was guessed
  this.letterGuessed = false;
  //function that checks if letter was guessed and returns either letter or "-" to be displayer
  this.display = function(){
      if(this.letterGuessed === false){
          return "-";
      }else{
          return this.letter;
      };
  };
  //function to change letterGuessed to true
  this.hasLetterBeenGuessed = function(){
        this.letterGuessed = true;
     
  }
}


//export Letter to word.js
module.exports = Letter;