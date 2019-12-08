document.getElementById("countButton").onclick = function() {
  const letterCounts = {}
  const wordsCounts = {}

  let typedText = document.getElementById("textInput").value;


  typedText = typedText.toLowerCase();
  // This changes all the letter to lower case.

  typedText = typedText.replace(/[^a-z'\s]+/g, "");
  // This gets rid of all the characters except letters, spaces, and apostrophes.
  // We will learn more about how to use the replace function in an upcoming lesson.

  for (let i = 0; i < typedText.length; i++) {
    currentLetter = typedText[i];
    if(letterCounts[currentLetter] === undefined) {
   letterCounts[currentLetter] = 1;
    } else {
   letterCounts[currentLetter]++;
    }
  }

    for (let letter in letterCounts) {
   const span = document.createElement("span");
   const textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
   span.appendChild(textContent);
   document.getElementById("lettersDiv").appendChild(span);
}


  const words = typedText.split(" ");
  for (let i = 0; i < words.length; i++) {
    currentLetter = words[i];
    if(wordsCounts[currentLetter] === undefined) {
   wordsCounts[currentLetter] = 1;
    } else {
   wordsCounts[currentLetter]++;
    }
  }

    for (let word in wordsCounts) {
   const span = document.createElement("span");
   const textContent = document.createTextNode('"' + word + "\": " + wordsCounts[word] + ", ");
   span.appendChild(textContent);
   document.getElementById("wordsDiv").appendChild(span);
}

  }
