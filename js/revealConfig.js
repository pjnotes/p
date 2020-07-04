Reveal.initialize({
	width: 720,
	height: 1280,

	// Factor of the display size that should remain empty around
	// the content
	margin: 0.04,

	// Bounds for smallest/largest possible scale to apply to content
	minScale: 0.2,
	maxScale: 3.0,
	//disableLayout: true,
	hash: true,
	  controlsBackArrows: 'faded',

	// Learn about plugins: https://revealjs.com/plugins/
	plugins: [ RevealZoom, RevealNotes, RevealSearch, RevealMarkdown, RevealHighlight ]
});