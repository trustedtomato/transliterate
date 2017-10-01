var vowels = 'АЕИОУЫЭЮЯ';
var basicMappings = {
	'А': 'A',
	'Б': 'B',
	'В': 'V',
	'Г': 'G',
	'Д': 'D',
	'Ж': 'Zh',
	'З': 'Z',
	'И': 'I',
	'Й': 'Y',
	'К': 'K',
	'Л': 'L',
	'М': 'M',
	'Н': 'N',
	'О': 'O',
	'П': 'P',
	'Р': 'R',
	'С': 'S',
	'Т': 'T',
	'У': 'U',
	'Ф': 'F',
	'Х': 'Kh',
	'Ц': 'Ts',
	'Ч': 'Ch',
	'Ш': 'Sh',
	'Щ': 'Shch',
	'Ъ': '"',
	'Ы': 'Y',
	'Ь': "'",
	'Э': 'E',
	'Ю': 'Yu',
	'Я': 'Ya',
	'Ё': 'Yo',
	'І': 'I',
	'Ѳ': 'F',
	'Ѵ': 'I'
};


function includes(arr, el){
	return ~arr.indexOf(el);
}

function isAtStart(i, text){
	return i == 0 || /\s/.test(text[i-1]);
}

function prevChar(i, text) {
	if(isAtStart(i, text)){
		return '';
	}
	return text[i-1];
}


module.exports = function(text){
	return Array.prototype.slice.call(text).reduce((fullString, char, i) => {
		
		var char = text[i];
		var upperCaseChar = char.toUpperCase();
		var isUpperCase = upperCaseChar === char;

		var englishUpperCase = 
			basicMappings.hasOwnProperty(upperCaseChar) ? basicMappings[upperCaseChar] :
			upperCaseChar == 'Е' || upperCaseChar == 'Ѣ' ?
				isAtStart(i, text) || includes(vowels, prevChar(i, text)) || prevChar(i, text) == 'Ъ' || prevChar(i, text) == 'Ь'
				? 'Ye'
				: 'E'
			: upperCaseChar;

		return fullString + (isUpperCase ? englishUpperCase : englishUpperCase.toLowerCase());
		
	}, '');
}

console.log(module.exports('Время и Стекло'));