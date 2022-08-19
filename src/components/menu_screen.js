import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import Nosotros from "./nosotros";
import { useState } from 'react';
import Actualidad from "./actualidad";
import Reconocimientos from "./reconocimientos";

const MenuScreen = () => {
    const [nosotrosOpened, setNosotrosOpened] = useState(false);
    const [contactoOpened, setContactoOpened] = useState(false);
    const [actualidadOpened, setActualidadOpened] = useState(false);
    const [recOpened, setRecOpened] = useState(false);

    const handleClickNosotros = () => setNosotrosOpened(true);
    const handleClickRec = () => setRecOpened(true);
    const handleClickContacto = () => setContactoOpened(true);
    const handleClickActualidad = () => setActualidadOpened(true);

    if (!nosotrosOpened && !contactoOpened && !actualidadOpened && !recOpened) {

        return (
            <div className="menu-screen">
                <div className="menu-options">
                    <a className="menu-option-link" onClick={handleClickNosotros}>
                        <h1 className="menu-option">nosotros</h1>
                    </a>
                    <a className="menu-option-link" onClick={handleClickActualidad}>
                        <h1 className="menu-option">actualidad</h1>
                    </a>
                    <a className="menu-option-link" onClick={handleClickRec}>
                        <h1 className="menu-option">reconocimientos</h1>
                    </a>
                    <a className="menu-option-link" onClick={handleClickContacto}>
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

    else if (nosotrosOpened) {
        return (
            <Nosotros />);
    }
    else if (actualidadOpened) {
        return (
            <Actualidad />);
    }
    else if (recOpened) {
        return (
            <Reconocimientos />);
    }

}
export default MenuScreen;