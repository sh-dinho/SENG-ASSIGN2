//
// this is just a stub for a function you need to implement
//
function getStats(txt)
{
    var regex = /[\s+,.\n''\r\t+:]/;
    var words = txt.split(regex)
    .filter(function(x) {
            return (x !== (undefined || null || ''))
    });
    
    return {
        nChars: nChars(txt),
        nWords: nWords(txt),
        nLines: nLines(txt),
        nNonEmptyLines: nNonEmptyLines(txt),
        averageWordLength: averageWordLength(txt),
        maxLineLength: maxLineLength(txt),
        palindromes: getPalindromes(words),
        longestWords: longestWords(txt),
        mostFrequentWords: getFrequency(words)
    };
}

function nChars(txt) 
{
	//trim removes white spaces
	//var regex = /\n /g;
	return txt.length;
}

function nWords(txt) 
{
	//words = 0;
	//n = txt.length;
	var regex =/\s+/gm;
	return txt.trim().split(regex).length;
}

function nLines(txt)
{
	var regex = /\n/gm;
	return txt.split(regex).length;
}

function nNonEmptyLines(txt)
{
	var regex = /.*\s.*/gm;
	return txt.match(regex, '').length;
}

function maxLineLength(txt) 
{
	var max = 0;
	var temp = txt[0].length;
	var word = txt.split('\n');

	for (i = 1; i < word.length; i++)
	{
		if (word[i].length > temp)
		{
			max = i;
			temp = word[i].length;
		}
	}
	return temp;
}

function longestWords(txt) 
{
	var word = ' ';
    var frequencies = {}, word, frequency, i;
	var s = txt.split(' ');
	for (i = 0; i < s.length; i++)
	 {
	 	if (s[i].length > word.length)
	 	 {
	 	 	word = s[i];
             frequencies[word] = frequencies[word] || 0;
             frequencies[word]++;
	 	 }
	 }
    //return word;
    return Object.keys(frequencies).map(function(key) {
                                        return [key, frequencies[key]];
                                        }).sort(function(first, second) {
                                                if (second[1] == first[1]) {
                                                return first[0].localeCompare(second[0]);
                                                }
                                                return second[1] - first[1];
                                                }).slice(0,10)
}



function averageWordLength(txt)
 {
     //var sum = 0;
     //var regex = /' ' + ',' + '.' + '\n';
 //	var word = txt.split(' ');
 //	for (i = 0; i < word.length; i++) {
//	 	sum += word[i].length;
//	 }
//	 avg = (sum / word.length);
     //	 return avg;
     var sum = 0;
     var regex = /[\s+,.\n''\r\t+:]/;
     var words = txt.split(regex)
                    .filter(function(x) {
                       return (x !== (undefined || null || ''))
                    });
    
    for (i = 0; i < words.length; i++) {
   		sum += words[i].length;
	}
	var avg = (sum / words.length);
    return avg;

 }

function isPalindrome(str) {
    
    if (str.length < 2) {
        return false;
    }
    
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}

function getPalindromes(stringArray) {
    
    var pals = [];
    for (var i = 0; i < stringArray.length; i++) {
        if (isPalindrome(stringArray[i])) {
            pals.push(stringArray[i]);
        }
    }
    
    return pals;
}


function getFrequency(stringArray, cutOff) {
    
    var frequencies = {}, word, frequency, i;
    
    for( i=0; i<stringArray.length; i++ ) {
        word = stringArray[i];
        frequencies[word] = frequencies[word] || 0;
        frequencies[word]++;
    }
    
    return Object.keys(frequencies).map(function(key) {
                                        return [key, frequencies[key]];
                                        }).sort(function(first, second) {
                                                if (second[1] == first[1]) {
                                                return first[0].localeCompare(second[0]);
                                                }
                                                return second[1] - first[1];
                                                }).slice(0,cutOff)
}
