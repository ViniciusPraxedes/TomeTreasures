import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import "./Succes.scss";
import {resetCart} from "../../redux/cartReducer";
import {useDispatch} from "react-redux";


const Success = () => {
    const dispatch = useDispatch();
    return(
        <div className="success">
            <h1>Payment successful!</h1>
            <CheckCircleOutlineIcon className="done-icon"/>
            <h2>Thank you for testing my project!</h2>
            <h3>Your feedback is important, please contact me if you liked it!</h3>
            <div className="contact-icons">
                <a href="https://www.linkedin.com/in/vinicius-praxedes/" target="_blank">
                    <LinkedInIcon className="icon" />
                </a>
                <a href="https://www.viniciuspraxedes.com/" target="_blank">
                    <LanguageIcon className="icon" />
                </a>
                <a href="mailto:vinipraxedes@hotmail.com" target="_blank">
                    <EmailIcon className="icon" />
                </a>
            </div>
            <a onClick={() => dispatch(resetCart())} href="/">
                <h3>Go back to home</h3>
            </a>

        </div>
    );
}
export default Success;