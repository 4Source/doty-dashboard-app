import { Button, ContainerStyle, Flex, InputField, Title } from "../utils/styles";

export const GuildPrefixPage = () => <div>
    <ContainerStyle>
        <div>
            <Title>Update Command Prefix</Title>
            <form>
                <div>
                    <label htmlFor="prefix">Current Prefix</label>
                </div>
                <InputField style={{ margin: '10px 0px' }}/>
                <Flex justifyContent="flex-end">
                    <Button type="button" style={{marginRight: '8px'}}>Reset</Button>
                    <Button primary>Save</Button>
                </Flex>
            </form>
        </div>
    </ContainerStyle>
</div>;