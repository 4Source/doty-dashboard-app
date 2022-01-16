import { useContext } from "react";
import { useNavigate } from "react-router";
import { GuildMenuItem } from "../components/GuildMenuItem";
import { GuildContext } from "../utils/contexts/GuildContext";
import { ContainerStyle, Page } from "../utils/styles";
import { mockGuilds } from "../__mocks__/guilds";

export const MenuPage = () => {
    const navigate = useNavigate();
    const { setGuildId } = useContext(GuildContext);

    const handleClick = guildId => {
        setGuildId(guildId);
        navigate('/dashboard/categories');
    };

    return (
        <Page>
            <ContainerStyle>
                <h2>Select a Server</h2>
                <div>
                    {mockGuilds.map((guild) => (
                        <div onClick={() => handleClick(guild.id) } key={guild.id}>
                            <GuildMenuItem guild={guild} />
                        </div>
                    ))}
                </div>
            </ContainerStyle>
        </Page>
    );
};