import { Overlay } from "../utils/styles";
import { BarLoader } from 'react-spinners';

export const Spinner = () => 
    <Overlay>
        <BarLoader color="white" />
    </Overlay>
