import { useEffect, useState } from "react";
import { getGuildConfig } from "../api";


export function useGuildConfig(guildId) {
    const [ config, setConfig ] = useState(null);
    const [ error , setError ] = useState(null);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        setLoading(true);
        getGuildConfig(guildId)
        .then(({ data }) => {
            console.log(data);
            setConfig(data);
        })
        .catch((err) => {
            console.log(err)
            setError(err);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);

    return [ config, error, loading ];
}