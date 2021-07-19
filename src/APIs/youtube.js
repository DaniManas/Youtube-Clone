import axios from 'axios';

const KEY ="AIzaSyBzQqqgjgimi6uWIh0duk3luVdruO5DBak"

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
})



