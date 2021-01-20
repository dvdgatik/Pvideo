import {useState, useEffect} from 'react';

// Custom Hook

const useInitialState = (API) => {
const [videos, setVideos] = useState([]);

	useEffect(() => {
		//logica
		fetch(API)
		.then(response => response.json())
		.then(data => setVideos(data));
	},[]);
	//Retornar Estado
	return videos;
}
export default useInitialState;