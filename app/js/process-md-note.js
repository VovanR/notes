/* global marked, hljs */

const markedRenderer = new marked.Renderer()

// Note `h2` headers collection
let h2s = null

// Build note headers
markedRenderer.heading = (text, level) => {
	const escapedText = text.toLowerCase().replace(/[^\wА-Яа-я]+/g, '-')
	const id = `anchor-${escapedText}`
	const url = `#${id}`

	// Collect note `h2` headers
	if (level === 2) {
		h2s.push({
			name: text,
			url
		})
	}

	return `<h${level} id="${id}"><a href="${url}"></a>${text}</h${level}>`
}

const processMDNote = text => {
	// Clear `h2` collection
	h2s = []
	const data = marked(
		text,
		{
			gfm: true,
			highlight: code => hljs.highlightAuto(code).value,
			renderer: markedRenderer
		}
	)
	// Write `h2` collection
	const h2 = h2s

	return {data, h2}
}

export {
	processMDNote
}
