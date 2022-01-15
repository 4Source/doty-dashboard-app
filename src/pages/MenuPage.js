import { useContext } from "react";
import { useNavigate } from "react-router";
import { GuildMenuItem } from "../components/GuildMenuItem";
import { GuildContext } from "../utils/contexts/GuildContext";
import { ContainerStyle } from "../utils/styles";
import { mockGuilds } from "../__mocks__/guilds";

export const MenuPage = () => {
    const navigate = useNavigate();
    const { setGuildId } = useContext(GuildContext);

    const handleClick = guildId => {
        setGuildId(guildId);
        navigate('/dashboard/categories');
    };

    return (
    <div>
        {/*<div>MenuPage</div>
        <ul>
            {mockGuilds.map((guild) => (
                <li onClick={() => {
                    setGuildId(guild.id);
                    navigate('/categories');
                }}>
                    {guild.name}
                </li>
            ))}
        </ul>*/}

        <ContainerStyle>
            <h2>Select a Server</h2>
            <div>
                {mockGuilds.map((guild) => (
                    <div onClick={() => handleClick(guild.id) }>
                        <GuildMenuItem guild={guild}  key={guild.id} />
                    </div>
                ))}
            </div>
        </ContainerStyle>
    </div>
    );
};