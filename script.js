function processText() {
    // Get the text from the input box
    const inputText = document.getElementById("input-text").value;
  
    
    const chars = inputText.split(""); // Split the text into an array of characters
    
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === ":") {
        if (chars[i + 1] !== '"' && chars[i + 1] !== "[" && chars[i + 1] !== "{") {
            console.log("Inserted at", i + 1, ":", chars[i + 1]);
            chars.splice(i + 1, 0, '"'); // Insert '"' at index i + 1
    
            let j = i + 1;
            while (j < chars.length) {
            if (chars[j] === " " || chars[j] === "}" || chars[j] === "]" || chars[j] === ",") {
                chars.splice(j, 0, '"'); // Insert '"' at index j
                break;
            }
            j++;
            }
        }
        }
    }
    
    chars.join(""); // Join the characters back into a string
      
  
    const outputText = chars.join(""); 
  
    // Set the output text box value
    document.getElementById("output-text").value = outputText;
  }
  
