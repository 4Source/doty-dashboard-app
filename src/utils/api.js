import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export const getAuthStatus = () => axios.get(`${API_URL}/auth/status`, {
    withCredentials: true,
});

export const getMutualGuilds = () => axios.get(`${API_URL}/discord/guilds`, {
    withCredentials: true,
});

export const getGuildConfig = (guildId) => axios.get(`${API_URL}/guilds/config/${guildId}`);