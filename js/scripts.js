function HangMan(words) {
  this.words = ["mountain", "tree", "river", "rock", "ocean", "sea"];
  this.wrongGuesses = 0;
  this.word = this.chooseWord();
  this.wordBlank = this.blankMaker();
};

HangMan.prototype.chooseWord = function() {
  return this.word = this.words[Math.floor(Math.random()*this.words.length)];
};

HangMan.prototype.blankMaker = function() {
  var array = [];
  for (var i = 0; i < this.word.length; i++) {
    array.push("_");
  }
  return array;
}

HangMan.prototype.blankReplacer = function(guessedLetter) {
  for (var i = 0; i < this.word.length; i++) {
    if (this.word.charAt(i) === guessedLetter)  {
      this.wordBlank[i] = guessedLetter;
    } else {

    }
  };
};

HangMan.prototype.wrongCount = function(guessedLetter) {
  var wrongGuess = this.word.indexOf(guessedLetter);
    if (wrongGuess === -1) {
      this.wrongGuesses += 1;
    };
};

$(document).ready(function() {
  var gameWord = new HangMan();
  $("input#startGame").click(function() {
    $("#pickedWord").empty();
    $("#pickedWord").append(gameWord.wordBlank);
    $("#wrong0").show();
  });
  $(".letters").click(function() {
    var guessedLetter = $(this).val();
    gameWord.wrongCount(guessedLetter);
    gameWord.blankReplacer(guessedLetter);
    $("#pickedWord").empty();
    $("#pickedWord").append(gameWord.wordBlank);
    console.log(gameWord.wordBlank);
    console.log(gameWord.wrongGuesses);
    if (gameWord.wrongGuesses === 1) {
      $("#wrong0").hide();
      $("#wrong1").show();
    } else if (gameWord.wrongGuesses === 2) {
      $("#wrong1").hide();
      $("#wrong2").show();
    } else if (gameWord.wrongGuesses === 3) {
      $("#wrong2").hide();
      $("#wrong3").show();
    } else if (gameWord.wrongGuesses === 4) {
      $("#wrong3").hide();
      $("#wrong4").show();
    } else if (gameWord.wrongGuesses === 5) {
      $("#wrong4").hide();
      $("#wrong5").show();
    } else if (gameWord.wrongGuesses === 6) {
      $("#wrong5").hide();
      $("#wrong6").show();
    };
  });
});
