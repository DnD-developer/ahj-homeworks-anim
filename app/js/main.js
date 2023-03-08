document.addEventListener("DOMContentLoaded", () => {
	const animateElementDomEl = document.querySelector(".animate-text")
	const animateTriggerDomEl = document.querySelector(".btn-trigger")
	const parrentAnimateElementDomEl = document.querySelector(".animate-wrapper")

	const animateElementHeight = animateElementDomEl.clientHeight + 42
	const animateElementWidth = animateElementDomEl.clientWidth

	parrentAnimateElementDomEl.style.width = `${animateElementWidth}px`

	animateElementDomEl.style.height = "0px"

	animateTriggerDomEl.addEventListener("click", () => {
		if (!animateElementDomEl.classList.contains("animate-active")) {
			animateElementDomEl.classList.add("animate-active")
			animateElementDomEl.style.height = `${animateElementHeight}px`

			return
		}

		animateElementDomEl.classList.remove("animate-active")
		animateElementDomEl.style.height = "0px"
	})
})
