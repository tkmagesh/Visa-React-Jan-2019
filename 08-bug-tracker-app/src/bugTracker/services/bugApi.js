
const storage = window.localStorage;

let currentBugId = 0;

function getAll(){
	let result = [];
	for(let index = 0, count = storage.length; index < count; index++){
		let key = storage.key(index),
			rawData = storage.getItem(key),
			bug = JSON.parse(rawData);
		currentBugId = currentBugId > bug.id ? currentBugId : bug.id;		
		result.push(bug);
	}
	return result;
}

function save(bug){
	if (bug.id === 0){
		bug.id = ++currentBugId;
	}
	storage.setItem(bug.id.toString(), JSON.stringify(bug));
	return bug;
}

function remove(bug){
	storage.removeItem(bug.id.toString());
}

let bugApi = { getAll, save, remove };

export default bugApi;