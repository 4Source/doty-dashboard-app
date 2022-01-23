export const getIconURL = (guild) => {
    if(guild.icon) return `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`;   
};