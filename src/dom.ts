export function selectOnlyThis(className: string, selectedElement: HTMLElement): void {
	document.querySelectorAll<HTMLElement>('.' + className).forEach((element) => {
		if (selectedElement === element) {
			element.classList.add('selected');
		} else {
			element.classList.remove('selected');
		}
	});
}
