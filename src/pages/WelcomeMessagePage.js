import { useContext } from "react";
import { BarLoader } from "react-spinners";
import { updateWelcomeChannelId } from "../utils/api";
import { GuildContext } from "../utils/contexts/GuildContext";
import { useFetchGuildChannels } from "../utils/hooks/useFetchGuildChannels";
import { Button, ContainerStyle, Flex, Page, Select, TextArea, Title } from "../utils/styles";

export const WelcomeMessagePage = () => {
    const { guild } = useContext(GuildContext);
    const [ config, channels, selectedChannel, setSelectedChannel, error, loading ] = useFetchGuildChannels(guild && guild.id, { type: [0, 4]});
    

    const updateWelcomeChannel = async() => {
        try {
            await updateWelcomeChannelId(guild && guild.id, selectedChannel);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Page>
            <ContainerStyle>
                <Title>Update Welcome Message</Title>
                {
                    !loading && config && channels && !error ? (
                        <>
                            <div>
                                <section>
                                    <div>
                                        <label>Current Channel</label>
                                    </div>
                                    <Select 
                                        defaultValue={config.welcome_channel_id ? `${config.welcome_channel_id}` : 'default'} 
                                        style={{ margin: '10px 0px' }}
                                        onChange={(e) => {
                                            setSelectedChannel(e.target.value);
                                        }}
                                    >
                                        <option 
                                            value={'default'} 
                                            key={'default'}
                                            disabled
                                        >
                                            Please Select a Channel
                                        </option>
                                        {
                                            channels.map((channel) => {
                                                if(channel.type === 4) {
                                                    return <option
                                                        value={channel.id}
                                                        key={channel.id}
                                                        disabled
                                                    >
                                                        {channel.name}
                                                    </option>
                                                }
                                                else {
                                                    return <option
                                                        value={channel.id}
                                                        key={channel.id}
                                                    >
                                                        #{channel.name}
                                                    </option>
                                                }
                                            })
                                        }
                                    </Select>
                                </section>
                                <section style={{ margin: '10px 0px' }}>
                                    <div>
                                        <label htmlFor="message">Current Message</label>
                                    </div>
                                    <TextArea style={{ margin: '10px 0px' }} id="message"/>
                                </section>
                                <Flex justifyContent="flex-end">
                                    <Button type="button" style={{marginRight: '8px'}}>Reset</Button>
                                    <Button primary onClick={updateWelcomeChannel}>Save</Button>
                                </Flex>
                            </div>
                        </>
                    ) : (error ? (
                            <div>Error</div>
                        ) : (
                            <Flex justifyContent="center">
                                <BarLoader color="white" />
                            </Flex>
                        )
                    )
                }
            </ContainerStyle>
        </Page>
    );
}