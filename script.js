//your JS code here. If required.
function mapLetters(word) {
  // Initialize an empty object to store the letter-to-index mapping
  const letterMap = {};

  // Loop through the string to collect indexes
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    
    // If the letter is not yet a key in the object, initialize it with an empty array
    if (!letterMap[letter]) {
      letterMap[letter] = [];
    }

    // Push the current index into the letter's array
    letterMap[letter].push(i);
  }

  return letterMap;
}

// Test cases
console.log(mapLetters("dodo"));    // Output: { d: [0, 2], o: [1, 3] }
console.log(mapLetters("froggy"));  // Output: { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
console.log(mapLetters("grapes"));  // Output: { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }
