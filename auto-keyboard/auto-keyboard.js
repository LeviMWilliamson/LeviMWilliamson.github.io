class AutoKeyboardElement extends HTMLElement {
	constructor() {
		super()
		this.registerElement()
		this.emitClickEvents()
	}

	/**
	 * Register the custom element, create shadow DOM.
	 */
	registerElement() {
		const templateContent = document.getElementById('keyboard-template').content
		this.attachShadow({mode: 'open'})
			.appendChild(templateContent.cloneNode(true))
	}

	/**
	 * Enable click events from the keys.
	 * Emit the key's letter-value when pressed in the 'detail' property of the emitted event.
	 */
	emitClickEvents() {
		const keys = this.shadowRoot.querySelectorAll('button.key');
		for( let key of keys )
			key.addEventListener('click', 
				event => this.dispatchEvent( 
					new CustomEvent('autokey', { detail: key.dataset.letter == 'space' ? ' ' : key.dataset.letter }) 
				)
			)
	}

	typeKey( letter ) {
		const HOLD_DURATION = 150
		// Letter must be CSS-friendly
		if(letter.match(/\s/))
			letter = 'space'
		// Find the key
		const key = this.shadowRoot.querySelector(`button.key[data-letter=${letter}]`)
		if( !key )
			throw new Error(`The letter ${letter} does not exist on this keybaord.`)
		// Style the key, and click it to propogate event
		key.classList.add('pressed')
		setTimeout( () => {
			key.click()
			key.classList.remove('pressed')
		}, HOLD_DURATION)
	}

	tryHighlightKey( letter ) {
		if(letter.match(/\s/))
			letter = 'space'
		else if(letter.match(/^[A-Za-z]$/)) {
			const key = this.shadowRoot.querySelector(`button.key[data-letter=${letter}]`)
			if( key )
				key.classList.add('pressed')
		}
	}
	tryLowlightKey( letter ) {
		if(letter.match(/\s/))
			letter = 'space'
		else if(letter.match(/^[A-Za-z]$/)) {
			const key = this.shadowRoot.querySelector(`button.key[data-letter=${letter}]`)
			if( key )
				key.classList.remove('pressed')
		}
	}
}
customElements.define('auto-keyboard', AutoKeyboardElement);