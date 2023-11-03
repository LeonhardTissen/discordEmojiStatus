export function writeToClipboard(
	str: string,
	successMessage: string = 'Copied to clipboard!'
): void {
	navigator.clipboard.writeText(str)
		.then(() => {
			alert(successMessage);
		})
		.catch(() => {
			alert(str);
		});
}
