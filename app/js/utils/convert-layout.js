const CHAR_MAP = {
	й: 'q',
	ц: 'w',
	у: 'e',
	к: 'r',
	е: 't',
	н: 'y',
	г: 'u',
	ш: 'i',
	щ: 'o',
	з: 'p',
	ф: 'a',
	ы: 's',
	в: 'd',
	а: 'f',
	п: 'g',
	р: 'h',
	о: 'j',
	л: 'k',
	д: 'l',
	я: 'z',
	ч: 'x',
	с: 'c',
	м: 'v',
	и: 'b',
	т: 'n',
	ь: 'm',
}

function convertCharLayout(char) {
	const convertedChar = CHAR_MAP[char]

	if (convertedChar) {
		return convertedChar
	}

	return char
}

export default convertCharLayout
