import { Button, ContainerStyle, Flex, Page, Select, TextArea, Title } from "../utils/styles";

export const WelcomeMessagePage = () => {
    return (
        <Page>
            <ContainerStyle>
                <Title>Update Welcome Message</Title>
                <div>
                    <section>
                        <div>
                            <label>Current Channel</label>
                        </div>
                        <Select style={{ margin: '10px 0px' }}>
                            <option disabled>Please Select a Channel</option>
                            <option>123</option>
                            <option>124</option>
                            <option>125</option>
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
                        <Button primary>Save</Button>
                    </Flex>
                </div>
            </ContainerStyle>
        </Page>
    );
}