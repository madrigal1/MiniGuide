import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/locations/v2/list-nearby';

const options = {
    params: {
        bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359',
    },
    headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': 'ace78381e7msh2d592c2cd79cd15p14f8cfjsnfd8c2491c553'
    }
};


export const getPlacesData = async () => {
    try {
        const { data: { data } } = await axios.get(URL, options);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}