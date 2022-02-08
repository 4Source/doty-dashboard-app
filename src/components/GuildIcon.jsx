import { FaDiscord } from "react-icons/fa";
import { getIconURL } from "../utils/helpers";

export const GuildIcon = ( props ) => {
    return (
        props.guild.icon ? (
            <img src={getIconURL(props.guild)} alt="Logo" heigth={45} width={45} style={{ borderRadius: '50%', boxShadow: '0px 1px 5px 0px #00000080'}}/>
        ) : (
            <div style={{ borderRadius: '50%', width: '45px', height: '45px', backgroundColor: '#292929', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <FaDiscord size={40}/>
            </div>
        )
    );
};
