// Write your solution below:

// Write a function to turn a phrase into Pig Latin.

// Your function will be given a phrase (of one or more space-separated words). There will be no punctuation in it, and all letters will be lowercased. You should turn this into the same phrase in Pig Latin.

// Rules

// If the word begins with a consonant (not a, e, i, o, u), move the first letter to the end and add ‘ay’

// If the word begins with a vowel, add ‘yay’ to the end

// For example:

// >>> pigLatin('porcupines are cute')
// 'orcupinespay areyay utecay'

// >>> pigLatin('give me an apple')
// 'ivegay emay anyay appleyay'


function pigLatin(word) {
    let newWords = word.split(" ")
    for (let i = 0; i < newWords.length; i++) {
      if (newWords[i][0] === "a" || 
          newWords[i][0] === "e" || 
          newWords[i][0] === "i" || 
          newWords[i][0] === "o" || 
          newWords[i][0] === "u") {
          newWords[i] += "yay"
      
    } else {
        newWords[i] += newWords[i][0]
        newWords[i] += "ay"
        newWords[i] = newWords[i].substring(1)
      }
    }
    console.log(newWords)
  }
  pigLatin("hello")