import { GuildMenuStyle } from "../utils/styles";

export const GuildMenuItem = ( props => (
    <GuildMenuStyle>
        <img src={props.guild.icon} alt={props.guild.name} width={45} style={{ borderRadius: '50%' }}/>
        <p>{props.guild.name}</p>
    </GuildMenuStyle>
)); 