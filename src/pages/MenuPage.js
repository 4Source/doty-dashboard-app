import { useContext } from "react";
import { useNavigate } from "react-router";
import { GuildContext } from "../utils/contexts/GuildContext";
import { mockGuilds } from "../__mocks__/guilds";

export const MenuPage = () => {
    const navigate = useNavigate();
    const { setGuildId } = useContext(GuildContext);
    return (
    <div>
        <div>MenuPage</div>
        <ul>
            {mockGuilds.map((guild) => (
                <li onClick={() => {
                    setGuildId(guild.id);
                    navigate('/categories');
                }}>
                    {guild.name}
                </li>
            ))}
        </ul>
    </div>
    );
};