function getComparerFor(attrName){
	return function(item1, item2){
		if (item1[attrName] < item2[attrName]) return -1;
		if (item1[attrName] > item2[attrName]) return 1;
		return 0;
	}
}

function getDescendingComparerFor(comparer){
	return function(item1, item2){
		return comparer(item1, item2) * -1;
	}
}

export function sort(bugs, attrName, isDescending = false){
	console.log(arguments);
	let comparer = getComparerFor(attrName);
	if (isDescending)
		comparer = getDescendingComparerFor(comparer)
	let sortedBugs = [...bugs.sort(comparer)];
	let action = { type : 'REPLACE_ALL', payload : sortedBugs};
	return action;
}