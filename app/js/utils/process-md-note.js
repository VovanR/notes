/* global marked, markedHighlight, markedGfmHeadingId, markedMangle, hljs, hljsDefineVue */

hljs.registerLanguage('vue', hljsDefineVue)

const markedJs = new marked.Marked(markedHighlight.markedHighlight({
	langPrefix: 'hljs language-',
	highlight(code, lang) {
		const language = hljs.getLanguage(lang) ? lang : 'plaintext'
		return hljs.highlight(code, {language}).value
	},
}))
markedJs.use(markedMangle.mangle())
markedJs.use(markedGfmHeadingId.gfmHeadingId({
	prefix: 'anchor-',
}))

// Note `h2` headers collection
let h2s = null

// Build note headers
markedJs.use({
	renderer: {
		heading(text, level) {
			const escapedText = text.toLowerCase().replaceAll(/[^\wА-Яа-я]+/g, '-')
			const id = `anchor-${escapedText}`
			const url = `#${id}`

			// Collect note `h2` headers
			if (level === 2) {
				h2s.push({
					name: text,
					url,
				})
			}

			return `<h${level} id='${id}'><a href='${url}'></a>${text}</h${level}>`
		},
	},
})

const processMDNote = text => {
	// Clear `h2` collection
	h2s = []
	const data = markedJs.parse(text)
	// Write `h2` collection
	const h2 = h2s

	return {data, h2}
}

export default processMDNote
