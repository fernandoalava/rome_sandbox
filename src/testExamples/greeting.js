export const defaultName = "Unknow";

export function greeting({name = defaultName} = {}) {
	return `Hello ${name}`;
}
