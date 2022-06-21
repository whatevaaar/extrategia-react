import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
const MenuScreen = () => {
    return (
        <div className="menu-screen">
            <div className="menu-options">
                <a className="menu-option-link" href="#">
                    <h1 className="menu-option">nosotros</h1>
                </a>
                <a className="menu-option-link" href="#">
                    <h1 className="menu-option">actualidad</h1>
                </a>
                <a className="menu-option-link" href="#">
                    <h1 className="menu-option">reconocimientos</h1>
                </a>
                <a className="menu-option-link" href="#">
                    <h1 className="menu-option">contacto</h1>
                </a>
            </div>
            <div className="menu-screen-bottom">

            <div className="menu-screen-bottom-social">
                    <a href="https://www.facebook.com/learnbuildteach/"
                        className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://www.twitter.com/jamesqquick" className="twitter social">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="https://www.instagram.com/learnbuildteach"
                        className="instagram social">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </div>
            </div>
        </div>
    );
}
export default MenuScreen;