import { useContext } from "react";
import { BarLoader } from "react-spinners";
import { GuildContext } from "../utils/contexts/GuildContext";
import { useGuildConfig } from "../utils/hooks/useGuildConfig";
import { Button, ContainerStyle, Flex, InputField, Page, Title } from "../utils/styles";

export const GuildPrefixPage = () => {
    const { guild } = useContext(GuildContext);
    const [ config, error, loading ] = useGuildConfig((guild && guild.id) || '');

    return (
        <Page>
            <ContainerStyle>
                {!loading && config && !error ? (
                    <>
                        <Title>Update Command Prefix</Title>
                        <form>
                            <div>
                                <label htmlFor="prefix">Current Prefix</label>
                            </div>
                            <InputField style={{ margin: '10px 0px' }} id="prefix" placeholder={config.prefix}/>
                            <Flex justifyContent="flex-end">
                                <Button type="button" style={{marginRight: '8px'}}>Reset</Button>
                                <Button primary>Save</Button>
                            </Flex>
                        </form>
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
};