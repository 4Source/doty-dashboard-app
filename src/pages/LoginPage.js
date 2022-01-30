import { FaDiscord, FaQuestionCircle } from 'react-icons/fa';
import { HomeButtonStyle, HomePageStyle } from '../utils/styles';

export const LoginPage = () => {
    const redirect = () => {
        window.location.href = 'http://localhost:3001/api/auth';
    };    
    
    return (
        <HomePageStyle>
            <div></div>
            <div>
                <HomeButtonStyle onClick={redirect}>
                    <FaDiscord size={45} color="5865F2"/>
                    <p style={{ fontSize: '18px', padding: '0 0 0 10px' }}>Login with Discord</p>
                </HomeButtonStyle>
                <HomeButtonStyle>
                <FaQuestionCircle size={45} />
                    <p style={{ fontSize: '18px', padding: '0 0 0 10px' }}>Support Server</p>
                </HomeButtonStyle>
            </div>
            <div style={{
                    display: 'flex',
                    width: '450px',
                    justifyContent: 'space-between',
                }}>
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
                <span>Contact Us</span>
            </div>
        </HomePageStyle>
    );
};