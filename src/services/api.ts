import axios from 'axios';
import { API_KEY } from 'react-native-dotenv';

const api = axios.create({
  baseURL: 'https://v3.football.api-sports.io',
  headers: {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': API_KEY,
  },
});

export { api };
