export function selectOnlyThis(className: string, selectedElement: HTMLElement): void {
	document.querySelectorAll<HTMLElement>('.' + className).forEach((element) => {
		if (selectedElement === element) {
			element.classList.add('selected');
		} else {
			element.classList.remove('selected');
		}
	});
}

export function toggleClass(className: string, selectedElement: HTMLElement): boolean {
	if (selectedElement.classList.contains(className)) {
		selectedElement.classList.remove(className);
		return false;
	} else {
		selectedElement.classList.add(className);
		return true;
	}
}

export function hideOutputs(): void {
	document.querySelectorAll('.output').forEach((outputElement) => {
		outputElement.remove();
	})
}
