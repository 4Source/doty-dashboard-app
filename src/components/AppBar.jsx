import { AppBarStyle, SelectedGuildStyle } from "../utils/styles";
import { useContext } from "react";
import { GuildContext } from "../utils/contexts/GuildContext";
import { Navigate, useNavigate } from "react-router";
import { GuildIcon } from "./GuildIcon";

export const AppBar = () => {
    const navigate = useNavigate();
    const { guild } = useContext(GuildContext);
    console.log(guild);

    const handleClick = () => {
        navigate('/servers');
    };

    return guild ? (<AppBarStyle>
            <p>Configuring</p>
            <SelectedGuildStyle onClick={() => handleClick(guild) }>
                <p style={{ padding: '0 4px'}}>{guild.name}</p>
                <GuildIcon guild={guild}/>
                
            </SelectedGuildStyle>
        </AppBarStyle>
    ) : (
        <Navigate replace to="/servers" />
    )
};