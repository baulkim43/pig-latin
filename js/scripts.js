//business logic
var vowels = ["a", "e", "o", "u", "i", "A", "E", "O", "U", "I"]
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"]

var pigLatin = function(userInput) {
  var englishInputed;
  if (vowels.includes(userInput[0])) {
    englishInputed = userInput.concat("ay");
  } else if (consonants.includes(userInput[0])) {
    var englishInputed = englishInputed.push(englishInputed.splice(englishInputed.indexOf(userInput[0]), 1)[0]);
   englishInputed.concat("ay")
    console.log(englishInputed);


  }
  return englishInputed
    }




















//user interface logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var englishInputed = $("input#english").val().split("");
    // console.log(englishInputed);
    // var englishInputed = ["e", "n", "g", "l", "i", "s", "h"]
    var result = pigLatin(englishInputed);
    $("#result").append(result);



  });
});
