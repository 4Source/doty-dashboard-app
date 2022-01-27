import { useEffect, useState } from "react";
import { getGuildConfig } from "../api";


export function useGuildConfig(guildId) {
    const [ config, setConfig ] = useState(null);
    const [ prefix, setPrefix ] = useState(null);
    const [ error , setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        getGuildConfig(guildId)
        .then(({ data }) => {
            setConfig(data);
            setPrefix(data.prefix);
        })
        .catch((err) => {
            console.log(err)
            setError(err);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);
    
    return [ config, prefix, setPrefix, error, loading ];
}