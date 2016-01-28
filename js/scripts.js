function HangMan(words) {
  this.words = ["mountain"];
};

HangMan.prototype.chooseWord = function() {
  var word = this.words[Math.floor(Math.random()*this.words.length)];
  return word;
};

HangMan.prototype.splitWord = function() {
  var word = this.chooseWord();
  return word.split([]);
};

HangMan.prototype.findLetter = function(guessedLetter) {
  var result = [];
  var word = this.splitWord();
    for (var i=0; i < word.length; i++) {
      if(word[i] === guessedLetter) {
        result.push(word[i]);
    };
  }; return result;
};

HangMan.prototype.blankMaker = function() {
  var word= this.splitWord();
  for (var i=0; i < word.length; i++) {
    word[i] = "_";
  } return word;
}

HangMan.prototype.blankReplacer = function(guessedLetter) {
  var hiddenWord = this.blankMaker();
  var word = this.splitWord(); //mountain
  for (var i = 0; i < word.length; i++) {
    if (word[i] === guessedLetter) {
      hiddenWord[i] = word[i];
    }
  };
  return hiddenWord;
};
