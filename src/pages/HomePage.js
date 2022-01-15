import { FaDiscord, FaQuestionCircle } from 'react-icons/fa';
import { HomeButton, HomePageStyle } from '../utils/styles';

export const HomePage = () => <HomePageStyle>
    <div></div>
    <div>
        <HomeButton>
            <FaDiscord size={45} color="5865F2"/>
            <p style={{ fontSize: '18px', padding: '0 0 0 10px' }}>Login with Discord</p>
        </HomeButton>
        <HomeButton>
        <FaQuestionCircle size={45} />
            <p style={{ fontSize: '18px', padding: '0 0 0 10px' }}>Support Server</p>
        </HomeButton>
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
</HomePageStyle>;