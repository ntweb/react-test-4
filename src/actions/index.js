import axios from 'axios';

const API_URL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=MIMMO123abc';

export const FETCH_POSTS = 'FETCH_POSTS';



export function fetchPosts() {

    const url = `${API_URL}/posts${API_KEY}`;
    const request = axios.get(url);

    console.log(request);

    return {
        type: FETCH_POSTS,
        payload: request
    }
}