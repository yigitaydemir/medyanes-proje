import axios from "axios"

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search';

const options = {
    // method: 'GET',
    //url: BASE_URL,
    params: {
    //   relatedToVideoId: '7ghhRHRP6t4',
    //   part: 'id,snippet',
    //   type: 'video',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '58c2cd6c46msh1502e41530bbf2dp1ee186jsn38324ba414c8',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)

    return data
  }