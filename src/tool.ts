export enum Tool {
	Pencil,
	Brush,
	Bucket,
}

export const stringToolMap: Record<string, Tool> = {
	'pencil': Tool.Pencil,
	'brush': Tool.Brush,
	'bucket': Tool.Bucket,
};

export let tool: Tool = Tool.Pencil;

export function setTool(new_tool: Tool): void {
	tool = new_tool;
}
