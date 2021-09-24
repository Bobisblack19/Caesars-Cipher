function rot13(str) {
  /*to solve this problem, we need to figure out the Unicode values of the cipher, as the correct password will be 13 spots in either the plus or minus side. First, I create an array in which to place the cipher*/
  
  let cipher =[]
  
  /*Then I iterate through the cipher and get the codes ASCII values and asign it to a local variable x*/
  
  for (let i=0; i < str.length; i++) {
    var x = str.charCodeAt(i)

    /* At this point its necessary to look at the ASCII chart to figure out where the values lie numerically. */ 
    /* I used the chart at http://web.alfredstate.edu/faculty/weimandn/miscellaneous/ascii/ascii_index.html, but you can use which ever one is easiest for you to read.*/
    /* As the numbers given from the charCodeAt method correspond to the decimal values on the chart we can start by first eliminating all the white space at 32 */ 
    /* then we can see the upper case letters are mostly found between 65 and 90 and the lower case numbers are found betwwen 97 and 122. */ 
    /* We're exclusively dealing with Uppercase letters in this challenge(I added lower case to test my theory), as the letters must be 13 spaces apart and don't transform into punctuation. */
    /* This means its safe to assume 90 is the top most value and 65 is the bottom most value for upper case, so anything above or below this will be punctuation of some sort. */
    /* Being conscious to avoid any punctuation changes, we simply use the console to experiment pushing the numbers up or down 13 places until we crack the code. */

    if (x === 32) {
      
    } else if (x <= 77 && x > 63) {
      x = x + 13
    } else if (x >=78 && x <= 90) {
      x = x-13
    } else if (x <= 109 && x > 96) {
      x = x + 13
    } else if (x >=110 && x <= 122) {
      x = x-13
    }
    
    /*once we've comfortably found the parameters we need to process the code, we use unshift to load the values into our cipher array*/

    cipher.unshift(x)
  }

/* we then create a new array called password which will be our return array to pass the final completed cipher into*/
  
  let pass = []
  
  /*then we use iteration, unshift and fromCharCode to pass the cipher into the pass array as an array of characters*/
  
  for (let j = 0; j < cipher.length; j++){
    pass.unshift(String.fromCharCode(cipher[j]))
  }
  
  /* and we use join to put the characters back together as a string and return pass*/
  
  pass = pass.join('')

  return pass;
}

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
