const autokeyboard = document.getElementById('auto-keyboard')
const authorName = document.getElementById('author-name')
authorName.value = ''
autokeyboard.addEventListener('autokey', event => authorName.value += event.detail)
authorName.addEventListener('keydown', event => autokeyboard.tryHighlightKey(event.key.toLowerCase()))
authorName.addEventListener('keyup', event => autokeyboard.tryLowlightKey(event.key.toLowerCase()))

let nameIterator = 'levi williamson'[Symbol.iterator]()
function typeName() {
	let letterIteration = nameIterator.next()
	if (letterIteration.done)
		clearInterval(typeInterval)
	else
		autokeyboard.typeKey(letterIteration.value)
}
let typeInterval = setInterval(typeName, 150)
