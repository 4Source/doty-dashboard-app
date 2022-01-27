import { useContext } from "react";
import { useNavigate } from "react-router";
import { GuildMenuItem } from "../components/GuildMenuItem";
import { GuildContext } from "../utils/contexts/GuildContext";
import { useFetchMutualGuilds } from "../utils/hooks/useFetchMutualGuilds";
import { ContainerStyle, Flex, Page } from "../utils/styles";
import { BarLoader } from 'react-spinners';

export const ServersPage = () => {
    const navigate = useNavigate();
    const { updateGuild } = useContext(GuildContext);
    const [ guilds, error, loading ] = useFetchMutualGuilds();
    
    const handleClick = guild => {
        updateGuild(guild);
        navigate('/dashboard/categories');
    };

    return (
        <Page>
            <ContainerStyle>
                <h2>Select a Server</h2>
                <div>
                    {
                        !loading && guilds && !error? (
                            <div>
                                {guilds && 
                                    guilds.map((guild) => (
                                        <div onClick={() => handleClick(guild) } key={guild.id}>
                                            <GuildMenuItem guild={guild} />
                                        </div>
                                ))}
                            </div>
                        ) : (error ? (
                                <div>Error</div>
                            ) : (
                                <Flex justifyContent="center">
                                    <BarLoader color="white" />
                                </Flex>
                            )
                        ) 
                    }
                </div>
            </ContainerStyle>
        </Page>
    );
};