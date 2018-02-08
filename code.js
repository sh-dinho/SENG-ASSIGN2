//
// this is just a stub for a function you need to implement
//
function getStats(txt)
{
    return {
        nChars: nChars(txt),
        nWords: nWords(txt),
        nLines: nLines(txt),
        nNonEmptyLines: 22,
        averageWordLength: 3.3,
        maxLineLength: 33,
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: ["hello(7)", "world(1)"]
    };
}

function nChars(txt) {
	//trim removes white spaces
	var regex = /\n + \t/g;
	return txt.replace(regex, "").trim().length;
}

//Input : text {Array of characters /String}
 //       N {Size of the string}
//Begin:
    //words ← 0;
    //For i ← 0 to N do
        //If (text [i] == ' ', 't', 'n') then
      //      word ← word + 1;
    //    End if
  //  End for
//End

function nWords(txt) {
	words = 0;
	n = txt.length;
	var regex = /\t + \n + ' '/;
	var broken = txt.split(regex);
	 
		for (i = 0; i < n; i++) {
			if (txt[i] == null || txt[i] == '\t' || txt[i] == '\n') {
				words++;
			}
		}
		//return words;
	return broken++;
}

function nLines(txt) {
	var regex = /\n/;
	return txt.split(regex).length;
}

function nNonEmptyLines(txt) {
	
}