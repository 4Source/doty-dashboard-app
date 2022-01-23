import { getIconURL } from "../utils/helpers";
import { GuildMenuStyle } from "../utils/styles";

export const GuildMenuItem = ( props ) => {
    return ( <GuildMenuStyle>
                <img 
                    src={getIconURL(props.guild)} 
                    alt={props.name} 
                    width={45} 
                    style={{ borderRadius: '50%' }}
                />
                <p>{props.guild.name}</p>
            </GuildMenuStyle>
    )}; 