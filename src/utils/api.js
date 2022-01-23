import axios from 'axios';



export const getAuthStatus = () => axios.get('http://localhost:3001/api/auth/status', {
    withCredentials: true,
});

export const getMutualGuilds = () => axios.get('http://localhost:3001/api/discord/guilds', {
    withCredentials: true,
});