import { FaDiscord } from "react-icons/fa";
import { getIconURL } from "../utils/helpers";
import { GuildMenuStyle } from "../utils/styles";

export const GuildMenuItem = ( props ) => {
    return ( <GuildMenuStyle>
                {props.guild.icon ? (
                    <img 
                        src={getIconURL(props.guild)} 
                        alt={props.name} 
                        width={45} 
                        style={{ borderRadius: '50%' }}
                    />
                ) : (
                    <div style={{ borderRadius: '50%', width: '45px', height: '45px', backgroundColor: '#292929', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                        <FaDiscord size={40}/>
                    </div>
                )}
                <p>{props.guild.name}</p>
            </GuildMenuStyle>
    )}; 