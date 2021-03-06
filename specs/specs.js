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

describe('blankMaker', function () {
  it("will convert letters of the random word into underscores", function () {
    var testWord = new HangMan();
    expect(testWord.blankMaker()).to.eql(["_", "_", "_", "_", "_", "_", "_", "_"]);
  });
});

describe('blankReplacer', function () {
  it("will replace '_' with correctly guessed letters", function () {
    var testWord = new HangMan();
    expect(testWord.blankReplacer("n")).to.eql(["_", "_", "_", "n", "_", "_", "_", "n"]);
  });
});

describe('wrongCount', function() {
  it("will count the number of incorrect gueses", function() {
    var testWord = new HangMan();
    expect (testWord.wrongCount()).to.equal(1)
  });
});
