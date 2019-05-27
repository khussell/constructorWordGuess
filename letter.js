var Letter = function(letter) {
  this.letter = letter;
  this.letterGuessed = false;
  this.display = function(){
      if(this.letterGuessed === false){
          return "-";
      }else{
          return this.letter;
      };
  };
  this.hasLetterBeenGuessed = function(){
        this.letterGuessed = true;
     
  }
}



module.exports = Letter;