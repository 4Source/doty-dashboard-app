import { useEffect, useState } from "react";
import { getMutualGuilds } from "../api";


export function useFetchMutualGuilds() {
    const [ guilds, setGuilds ] = useState(null);
    const [ error , setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        getMutualGuilds()
        .then(({ data }) => {
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