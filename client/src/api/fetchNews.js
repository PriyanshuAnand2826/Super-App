import axios from 'axios';

const BASE_URL = "https://newsapi.org/v2/top-headlines";
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const fetchNews = async () => {
    try {
        const { data } = await axios.get(BASE_URL, {
            params: {
                apiKey: API_KEY,
                sources: "techcrunch"
            },
        });
        console.log(data)
        return data;
    } catch (error) {
        console.error(error);
    }
};

export default fetchNews;