var Letter = function(letter) {
  this.letter = letter;
  this.letterGuessed = false;
  this.display = function(){
      if(this.letterGuessed === true){
          return "_";
      }else{
          return this.letter;
      };
  };
  this.hasLetterBeenGuessed = function(userGuess){
     if(userGuess === this.letter){
        this.letterGuessed = true;
     }
  }
}



module.exports(Letter)