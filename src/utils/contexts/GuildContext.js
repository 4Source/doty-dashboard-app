import { createContext } from "react";

export const GuildContext = createContext({
    guild: {
        id: '',
        name: '',
        icon: '',
        owner: false,
        permissions: '',
        features: [''],
    },
    setGuild: () => {},
});

