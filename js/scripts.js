//business logic
var vowels = ["a", "e", "o", "u", "i", "A", "E", "O", "U", "I"]

var pigLatin = function(englishInputed) {
  if (englishInputed[0].includes(vowels)) {
    console.log(englishInputed);
    englishInputed.append("ay");
  }
  }

// for (i = 0; i = 0; i ++) {
//   // if(vowels.includes(englishInputed)){
//   //   englishInputed = englishInputed.append("ay");
//   if(vowels.includes(englishInputed[0])){
//     // englishInputed = englishInputed
//   } console.log("hello")
//  }
// }

















//user interface logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var englishInputed = $("#english").val().split("");
    var result = pigLatin(englishInputed);
    console.log(englishInputed);

  });
});
