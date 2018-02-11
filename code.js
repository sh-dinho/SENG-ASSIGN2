//
// this is just a stub for a function you need to implement
//
function getStats(txt)
{
    return {
        nChars: nChars(txt),
        nWords: nWords(txt),
        nLines: nLines(txt),
        nNonEmptyLines: nNonEmptyLines(txt),
        averageWordLength: averageWordLength(txt),
        maxLineLength: maxLineLength(txt),
        palindromes: palindromes(txt),
        longestWords: longestWords(txt),
        mostFrequentWords: mostFrequentWords(txt)
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
	var regex = /.*\S.*/gm;
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
	var s = txt.split(' ');
	for (i = 0; i < s.length; i++)
	 {
	 	if (s[i].length > word.length)
	 	 {
	 	 	word = s[i];
	 	 }
	 }
	 return word;
}

function averageWordLength(txt)
 {
 	var sum = 0;
 	var word = txt.split(' ');
 	for (i = 0; i < word.length; i++) {
	 	sum += word[i].length;
	 }
	 avg = (sum / word.length);
	 return avg;
 }
 
 //https://www.quora.com/How-do-you-check-if-a-String-is-a-palindrome-in-JavaScript
 function palindromes(txt)
 {

	if(txt == txt.split('').reverse().join('') && txt.length > 2)
	{
		return pal = true;
	}
	else
	{
		return pal = false;
	}
	return pal;
 }
 
 function mostFrequentWords(txt)
 {
	 
 }
