export enum Tool {
	Pencil,
	Brush,
	Bucket,
	Grid
}

let tool: Tool = Tool.Pencil;

export function setTool(new_tool: Tool): void {
	tool = new_tool;
}

export function getTool(): Tool {
	return tool;
}
