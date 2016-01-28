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

HangMan.prototype.findLetter = function() {
  var result = []
  var word = this.splitWord();
    for (var i=0; i < word.length; i++) {
      if(word[i] === "n") {
        result.push(word[i]);
    }
  } return result;
};

HangMan.prototype.blankMaker = function() {
  var word= this.splitWord();
  for (var i=0; i < word.length; i++) {
    word[i] = "_";
  } return word;
}

HangMan.prototype.blankReplacer = function() {
  // debugger;
  var word= this.splitWord();
  var chosenLetter = "n";
  var hiddenWord = this.blankMaker();
  for (var i=0; i < word.length; i++) {
    var i = word.indexOf(chosenLetter, i+1);
    hiddenWord[i] = chosenLetter;
  } return(hiddenWord);
}
