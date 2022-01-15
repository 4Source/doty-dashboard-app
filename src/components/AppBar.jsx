import { AppBarStyle, SelectedGuildStyle } from "../utils/styles";

import herz from '../assets/herz.png'

export const AppBar = () => {
    return (<AppBarStyle>
        <p>Configuring</p>
        <SelectedGuildStyle>
            <p style={{ padding: '0 4px'}}>Server</p>
            <img src={herz} alt="Logo" heigth={45} width={45} style={{ borderRadius: '50%', boxShadow: '0px 1px 5px 0px #00000080'}}/>
        </SelectedGuildStyle>
    </AppBarStyle>
)};