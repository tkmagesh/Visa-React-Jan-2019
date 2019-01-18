import axios from 'axios'
const apiEndPoint = 'http://localhost:3030/bugs'

let currentBugId = 0
const storage = window.localStorage;

function getAll(){
	return axios
		.get(apiEndPoint)
		.then(response => response.data)
}

function save(bugData){
	if (bugData.id === 0){
		return axios
			.post(apiEndPoint, bugData)	
			.then(response => response.data);
	} else {
		return axios
			.put(`${apiEndPoint}/${bugData.id}`, bugData)
			.then(response => response.data);
	}
	
	
}

function remove(bugData){
	return axios
		.delete(`${apiEndPoint}/${bugData.id}`)
		.then(response => response.data);
}

let bugApi = { getAll, save, remove };

export default bugApi;