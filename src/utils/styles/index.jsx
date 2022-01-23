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

export const TextButton = styled(HomeButtonStyle)`
    padding: 18px 32px;
    width: auto;
    margin: 8px 8px;
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

export const ContainerStyle = styled.div`
    width: 1200px;
    margin: 0 auto;
`;

export const AppBarStyle = styled.nav`
    display: flex;
    justify-Content: space-between;
    align-items: center;
    padding: 10px 25px;
    box-sizing: border-box;
    border-bottom: 1px solid #58585858;
    box-shadow: 0px 1px 5px 0px #00000080;
`;

export const SelectedGuildStyle = styled.div`
    display: flex; 
    align-Items: center;
    justify-Content: left;
    padding: 0 4px;
    box-Sizing: border-box;
    border-radius: 5px;
    border: 1px solid #58585858;
    margin: 12px 0;
    box-shadow: 0px 1px 5px 0px #00000030;

    &:hover {
        background-Color: #212121;
        border: 1px solid #585858F0;
        box-shadow: 0px 1px 5px 0px #000000F0;
    }
`;

export const Title = styled.p`
    font-size: 22px;
`;

export const Flex = styled.div(props => ({
    display: 'flex',
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
    flexDirection: props.flexDirection,
}));

export const Grid = styled.div(() => ({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
}));

export const InputField = styled.input`
    padding: 10px 16px;
    box-sizing: border-box;
    font-size: 16px;
    color: inherit;
    font-family: inherit;
    background-color: #2121218d;
    border-radius: 5px;
    border: 1px solid #58585858;
    outline: none;
    width: 100%;
    box-shadow: 0px 1px 5px 0px #00000030;

    &:focus {
       outline: 1px solid #585858F0;
       box-shadow: 0px 1px 5px 0px #000000F0;
    }
`;

export const TextArea = styled.textarea`
    padding: 10px 16px;
    box-sizing: border-box;
    font-size: 16px;
    color: inherit;
    font-family: inherit;
    background-color: #2121218d;
    border-radius: 5px;
    border: 1px solid #58585858;
    outline: none;
    width: 100%;
    box-shadow: 0px 1px 5px 0px #00000030;
    resize: vertical;
    min-height: 45px;

    &:focus {
        outline: 1px solid #585858F0;
        box-shadow: 0px 1px 5px 0px #000000F0;
    }
`;

export const Button = styled.button`
    background: ${props => props.primary ? "#006ed3" : "#3d3d3d"};
    padding: 10px 24px;
    border-radius: 5px;
    outline: none;
    border: none;
    font-size: 16px;
    color: inherit;
    font-family: inherit;
    cursor: pointer;
`;

export const Page = styled.div`
    padding: 35px;
`;

export const Select = styled.select`
    width: 100%;
    padding: 10px 24px;
    font-family: inherit;
    font-size: 16px;
    background-color: #3d3d3d;
    color: inherit;
    border: 1px solid #58585858;
    border-radius: 5px;

    &:focus {
        outline: none;
    }

    & > option{
        background-color: inherit;
    }
`;