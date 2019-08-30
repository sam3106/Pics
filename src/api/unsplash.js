import axios from 'axios';
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID ab6245bd28796d164676fe33d9a1540527d6d4d20cb8f808a6eff7edc714844d'
  }
});
