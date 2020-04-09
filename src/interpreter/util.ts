import { Value, Node, VStr, VNum, VBool, VFn } from '.';
import { AiScriptError } from './error';

export function assertBoolean(val: Value): asserts val is VBool {
	if (val.type !== 'bool') {
		throw new AiScriptError(`Expect boolean, but got ${val.type}.`);
	}
}

export function assertFunction(val: Value): asserts val is VFn {
	if (val.type !== 'fn') {
		throw new AiScriptError(`Expect function, but got ${val.type}.`);
	}
}

export function assertString(val: Value): asserts val is VStr {
	if (val.type !== 'str') {
		throw new AiScriptError(`Expect string, but got ${val.type}.`);
	}
}

export function assertNumber(val: Value): asserts val is VNum {
	if (val.type !== 'num') {
		throw new AiScriptError(`Expect number, but got ${val.type}.`);
	}
}

export function valToString(val: Value) {
	const label =
		val.type === 'num' ? val.value :
		val.type === 'bool' ? val.value :
		val.type === 'str' ? `"${val.value}"` :
		val.type === 'fn' ? '...' :
		val.type === 'null' ? '' :
		null;
	return `${val.type}<${label}>`;
}

export function nodeToString(node: Node) {
	const label =
		node.type === 'num' ? node.value :
		node.type === 'bool' ? node.value :
		node.type === 'str' ? node.value :
		node.type === 'fn' ? null :
		node.type === 'null' ? null :
		node.type === 'def' ? node.name :
		node.type === 'var' ? node.name :
		node.type === 'call' ? node.name :
		null;
	return label ? `${node.type.toUpperCase()} (${label})` : node.type.toUpperCase();
}