import { useEffect, useState } from "react";
import { getGuildChannels, getGuildConfig } from "../api";

/**
 * @param {number} guildId Guild Id 
 * @param {{type:number[]}} options type of Channels
 */
export function useFetchGuildChannels( guildId, options = {} ) {
    const [ config, setConfig ] = useState(null);
    const [ channels, setChannels ] = useState(null);
    const [ selectedChannel, setSelectedChannel ] = useState(null);
    const [ error , setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    

    useEffect(() => {
        getGuildConfig(guildId)
        .then(({ data }) => {
            setConfig(data);
            if(data.welcome_channel_id) setSelectedChannel(data.welcome_channel_id);
            return getGuildChannels(guildId, options);
        })
        .then(({ data }) => {
            setChannels(data);
        })
        .catch((err) => {
            console.log(err)
            setError(err);
        })
        .finally(() => {
            setLoading(false);
        })
    }, []);
    
    return [ config, channels, selectedChannel, setSelectedChannel, error, loading ];
}