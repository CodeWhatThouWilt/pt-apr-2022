export function createElement(tag, options, parent) {
	const el = document.createElement(tag);
	// takes key/value pairs from options object and applies them to the element
	options && Object.assign(el, options);
	parent && parent.appendChild(el);
	return el;
}
