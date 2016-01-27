describe("HangMan", function() {
  it("will choose a random word from an array", function() {
    var testWord = new HangMan();
    expect(testWord.chooseWord()).to.equal('mountain');
  });

  it("will split a random word from the array into single letters", function() {
    var testWord = new HangMan();
    expect(testWord.splitWord()).to.eql(["m", "o", "u", "n", "t", "a", "i", "n"])
  });
});

describe('findLetter', function() {
  it("will find all instances of a specified letter in a word", function () {
    var testWord = new HangMan();
    expect(testWord.findLetter()).to.eql(["n", "n"]);
   });
});

describe('blankMaker', function () {
  it("will convert letters of the random word into underscores", function () {
    var testWord = new HangMan();
    expect(testWord.blankMaker()).to.eql(["_", "_", "_", "_", "_", "_", "_", "_"]);
  });
});

describe('blankReplacer', function (){
  it("will replace '_' with correctly guessed letters", function () {
    var testWord = new HangMan();
    expect(testWord.blankReplacer()).to.eql(["_", "o", "_", "_", "_", "_", "_", "_"]);
  });
});
