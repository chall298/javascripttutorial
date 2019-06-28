/* eslint-disable */
alert("hello");


//import 'breathecode-dom'; //DOM override to make JS easier to use


window.onload = function() {
  console.log("Hello Rigo from the console!");

  var pronoun = ["the", "our"];

  var adj = ["great", "big"];

  var noun = ["jogger", "racoon"];

  for (var a = 0; a < pronoun.length; a++) {
    for (var b = 0; b < adj.length; b++) {
      for (var c = 0; c < noun.length; c++) {
        console.log(pronoun[a] + adj[b] + noun[c] + ".com");
        let z = document.getElementById("sup");
        z.innerHTML += pronoun[a] + adj[b] + noun[c] + ".com </br>";
      }
    }
  }

  // document.querySelector("#excuse").innerHTML = pronoun[a] + adj[b] + noun[c];
};
