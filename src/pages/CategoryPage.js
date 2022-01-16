import { useContext } from "react";
import { GuildContext } from "../utils/contexts/GuildContext";
import { ContainerStyle, Flex, Grid, Page, TextButton, Title } from "../utils/styles";
import { IoSettingsOutline, IoNewspaperOutline } from 'react-icons/io5'
import { useNavigate } from "react-router-dom";

export const CategoryPage = () => {
    const { guildId } = useContext(GuildContext);
    const navigate = useNavigate();

    return (
        <Page>
            <ContainerStyle>
                <div>
                    <Flex alignItems="center" justifyContent="space-between">
                    <Title>Basic Configuration</Title>
                        <IoSettingsOutline size={40} />
                    </Flex>
                    <Grid>
                        <TextButton onClick={() => navigate('/dashboard/prefix')}>Command Prefix</TextButton>
                        <TextButton onClick={() => navigate('/dashboard/message')}>Welcome Message</TextButton>
                    </Grid>
                </div>
                <div style={{ borderTop: '1px solid #58585858', marginTop: '22px', }}>
                    <Flex alignItems="center" justifyContent="space-between">
                    <Title>Channel Logs</Title>
                        <IoNewspaperOutline size={40} />
                    </Flex>
                    <Grid>
                        <TextButton>Moderation Logs</TextButton>
                        <TextButton>Bot Logs</TextButton>
                    </Grid>
                </div>
            </ContainerStyle>
        </Page>
    );
};