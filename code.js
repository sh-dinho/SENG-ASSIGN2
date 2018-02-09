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
        palindromes: ["12321", "kayak", "mom"],
        longestWords: longestWords(txt),
        mostFrequentWords: ["hello(7)", "world(1)"]
    };
}

function nChars(txt) 
{
	//trim removes white spaces
	var regex = /\n + \t/gm;
	return txt.replace(regex, '').trim().length;
}

function nWords(txt) 
{
	//words = 0;
	//n = txt.length;
	var regex =/" "/gm;
	return txt.trim().split(' ').length;
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
	
	for (i = 1; i < txt.length; i++) 
	{
		if (txt[i].length > temp) 
		{
			max = i;
			temp = txt[i].length;
		}
	}
	return temp;
}

function longestWords(txt) 
{
	word = ' ';
	let s = txt.split(' ');
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
 	sum = 0;
 	var word = txt.split(' '); 	
 	for (i = 0; i < word.length; i++) {
	 	sum += word[i].length;
	 }
	 avg = (sum / word.length);
	 return avg;
 }