import { GuildMenuStyle } from "../utils/styles";
import { GuildIcon } from "./GuildIcon";

export const GuildMenuItem = ( props ) => {
    return ( <GuildMenuStyle>
                <GuildIcon guild={props.guild}/>
                <p>{props.guild.name}</p>
            </GuildMenuStyle>
    )}; 