export default function renameJsonKey(obj, oldKey, newKey) {
	obj[newKey] = obj[oldKey];
	delete obj[oldKey];
}
