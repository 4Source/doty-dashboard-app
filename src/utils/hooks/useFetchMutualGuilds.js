import { useEffect, useState } from "react";
import { getMutualGuilds } from "../api";


export function useFetchMutualGuilds() {
    const [ guilds, setGuilds ] = useState(null);
    const [ error , setError ] = useState(null);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        setLoading(true);
        getMutualGuilds()
        .then(({ data }) => {
            console.log(data);
            setGuilds(data);
        })
        .catch((err) => {
            console.log(err)
            setError(err);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);

    return [ guilds, error, loading ];
}