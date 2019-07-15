// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray, punctuation, numrep) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < sentence.length; i++) {
        
        const delimiters = punctuation.repeat(numrep)
        if ((i+1) % 3 === 0) {
            buildMeUp += " " + sentence[i] + delimiters;
        }
        else {        
        // Concatenate the new word onto buildMeUp
        buildMeUp += " " + sentence[i];
        // Print buildMeUp to the console
          }
          console.log(buildMeUp)
        }
        
    }

// Invoke the function and pass in the array
addExcitement(sentence, "🍦", 4)