import { useEffect, useState } from "react";
import { getAuthStatus } from "../api"

export function useFetchUser() {
    const [ user, setUser ] = useState(null);
    const [ error , setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        getAuthStatus()
        .then(({ data }) => {
            setUser(data);
        })
        .catch((err) => {
            console.log(err)
            setError(err);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);

    return [ user, error, loading ];
}

export function useFetchAuthStatus() {
    const [ authState, setAuthState ] = useState(null);
    const [ error , setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        getAuthStatus()
        .then(({ data }) => {
            if(!data) setAuthState(false);
            setAuthState(true);
        })
        .catch((err) => {
            console.log(err)
            setError(err);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);

    return [ authState, error, loading ];
}