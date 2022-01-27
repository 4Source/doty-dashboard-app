import { useContext } from "react";
import { BarLoader } from "react-spinners";
import { sortByPossition } from "../utils/compare/channels";
import { GuildContext } from "../utils/contexts/GuildContext";
import { useFetchGuildChannels } from "../utils/hooks/useFetchGuildChannels";
import { Button, ContainerStyle, Flex, Page, Select, TextArea, Title } from "../utils/styles";

export const WelcomeMessagePage = () => {
    const { guild } = useContext(GuildContext);
    const [ config, channels, error, loading ] = useFetchGuildChannels(guild && guild.id, { type: [0, 4]});
    
    return (
        <Page>
            <ContainerStyle>
                <Title>Update Welcome Message</Title>
                {
                    !loading && config && !error ? (
                        <>
                            <div>
                                <section>
                                    <div>
                                        <label>Current Channel</label>
                                    </div>
                                    <select defaultValue={config.welcome_channel_id ? `${config.welcome_channel_id}` : 'default'} style={{ margin: '10px 0px' }}>
                                        <option 
                                            value={'default'} 
                                            disabled
                                        >
                                            Please Select a Channel
                                        </option>
                                        {
                                            channels?.map((channel) => {
                                                if(channel.type == 4) {
                                                    return <option
                                                        value={channel.id}
                                                        disabled
                                                    >
                                                        {channel.name}
                                                    </option>
                                                }
                                                else {
                                                    return <option
                                                        value={channel.id}
                                                    >
                                                        #{channel.name}
                                                    </option>
                                                }
                                            })
                                        }
                                    </select>
                                </section>
                                <section style={{ margin: '10px 0px' }}>
                                    <div>
                                        <label htmlFor="message">Current Message</label>
                                    </div>
                                    <TextArea style={{ margin: '10px 0px' }} id="message"/>
                                </section>
                                <Flex justifyContent="flex-end">
                                    <Button type="button" style={{marginRight: '8px'}}>Reset</Button>
                                    <Button primary>Save</Button>
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