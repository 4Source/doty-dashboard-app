import styled from 'styled-components';

export const HomeButtonStyle = styled.div`
    display: flex; 
    align-Items: center;
    justify-Content: left;
    width: 350px; 
    background-Color: #2121218d;
    padding: 4px 20% 4px 20%;
    box-Sizing: border-box;
    border-radius: 5px;
    border: 1px solid #58585858;
    margin: 12px 0;
    box-shadow: 0px 1px 5px 0px #00000080;

    &:hover {
        background-Color: #212121;
        border: 1px solid #585858F0;
        box-shadow: 0px 1px 5px 0px #000000F0;
    }
`;

export const HomePageStyle = styled.div`
    height: 100%;
    padding: 50px 0;
    box-Sizing: border-box;
    display: flex;
    flex-Direction: column;
    justify-Content: space-between;
    align-Items: center;
`;

export const GuildMenuStyle = styled.div`
    display: flex; 
    justify-Content: space-between;
    align-items: center;
    background-Color: #2121218d;
    padding: 4px 25px 4px 25px;
    border-radius: 5px;
    border: 1px solid #58585858;
    margin: 12px 0;
    box-shadow: 0px 1px 5px 0px #00000080;

    &:hover {
        background-Color: #212121;
        border: 1px solid #585858F0;
        box-shadow: 0px 1px 5px 0px #000000F0;
    }
`;

export const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
`;