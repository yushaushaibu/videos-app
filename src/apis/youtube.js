import axios from 'axios';
const KEY = 'AIzaSyCnLA1s1vzy6EmkTPAuiZds_He9IsyVnIw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})