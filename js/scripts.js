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

// HangMan.prototype.findLetter = function(guessedLetter) {
//   var result = [];
//   var word = this.splitWord();
//     for (var i=0; i < word.length; i++) {
//       if(word[i] === guessedLetter) {
//         result.push(word[i]);
//     };
//   }; return result;
// };

HangMan.prototype.blankMaker = function() {
  var word= this.splitWord();
  for (var i=0; i < word.length; i++) {
    word[i] = "_";
  } return word;
}

HangMan.prototype.blankReplacer = function(guessedLetter) {
  var word = this.splitWord(); //["m", "o", "u", "n", "t", "a", "i", "n"]
  var hiddenWord = []; //["_", "_", "_", "_", "_", "_", "_", "_"]
  for (var i = 0; i < word.length; i++) {
    hiddenWord.push("_")
    if (word[i] === guessedLetter)  {
      hiddenWord[i] = word[i];
    }
  };
  return hiddenWord; //["_", "_", "_", "n", "_", "_", "_", "n"]
};

$(document).ready(function() {
  $("input#startGame").click(function(event) {
    $("#pickedWord").empty();
    var gameWord = new HangMan;
    $("#pickedWord").append(gameWord.blankMaker());
    $("#wrong0").show();
  });
})
