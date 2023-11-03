export function selectOnlyThis(className: string, selectedElement: HTMLElement): void {
	document.querySelectorAll<HTMLElement>('.' + className).forEach((element) => {
		if (selectedElement === element) {
			element.classList.add('selected');
		} else {
			element.classList.remove('selected');
		}
	});
}

export function toggleClass(className: string, selectedElement: HTMLElement): void {
	if (selectedElement.classList.contains(className)) {
		selectedElement.classList.remove(className);
	} else {
		selectedElement.classList.add(className);
	}
}
