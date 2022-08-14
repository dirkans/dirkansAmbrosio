import {createContext} from 'react';
import './modal.css';


import CloseIcon from '@mui/icons-material/Close';
let variab = true;
const Modal = ({title, close, children,}) => {
    return(
        <div className="modal-custom" >
        <CloseIcon onClick={() => close(false)}/>
        {children}
        </div>
    )
}
export default Modal