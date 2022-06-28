import { Grid, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mainImg from "../assets/img/logo-header.png"
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import f1 from "../assets/img/f1.png";
import f2 from "../assets/img/f2.png";
import f3 from "../assets/img/f3.png";
import f4 from "../assets/img/f4.png";
import f5 from "../assets/img/f5.png";
import f6 from "../assets/img/f6.png";
import f7 from "../assets/img/f7.png";
import f8 from "../assets/img/f8.png";


const Footer = () => {
    return (
        <footer>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <div className='footer-social-icons'>
                        <div className='footer-social-icon'>
                            <a href="https://www.facebook.com/ExtrategiaCom/"
                                className="facebook social">
                                <FontAwesomeIcon icon={faFacebook} className="social-icon" inverse size="2x" />
                            </a>
                        </div>
                        <div className='footer-social-icon'>
                            <a href="https://twitter.com/Extrategia" className="twitter social">
                                <FontAwesomeIcon icon={faTwitter} className="social-icon" inverse size="2x" />
                            </a>
                        </div>
                        <div className='footer-social-icon'>
                            <a href="https://www.instagram.com/extrategia/?hl=es"
                                className="instagram social">
                                <FontAwesomeIcon icon={faInstagram} className="social-icon" inverse size="2x" />
                            </a>
                        </div>
                        <div className='footer-social-icon'>
                            <a href="https://www.linkedin.com/company/extrategia/mycompany/"
                                className="linkedin social">
                                <FontAwesomeIcon icon={faLinkedin} className="social-icon" inverse size="2x" />
                            </a>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <img src={mainImg} className="footer-img" alt="Footer img" />
                    <div><a href="#" className='footer-link'>aviso de privacidad</a></div>
                    <div><a href="#" className='footer-link'>política de coookies</a></div>
                    <div><a href="https://www.extrategia.com.mx/Metal/" className='footer-link'>únete (METAL)</a></div>
                </Grid>
                <Grid item xs={4}>

                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <div><a href='#'><img src={f1} alt='logo' className='footer-logos' href="#" /></a></div>
                            <div><img src={f2} alt='logo' className='footer-logos' href="#" /></div>
                        </Grid>
                        <Grid item xs={4}>
                            <div><img src={f3} alt='logo' className='footer-logos' href="#" /></div>
                            <div><img src={f4} alt='logo' className='footer-logos' href="#" /></div>
                            <div><img src={f5} alt='logo' className='footer-logos' href="#" /></div>
                        </Grid>
                        <Grid item xs={4}>
                            <div><img src={f6} alt='logo' className='footer-logos' href="#" /></div>
                            <div><img src={f7} alt='logo' className='footer-logos' href="#" /></div>
                            <div><img src={f8} alt='logo' className='footer-logos' href="#" /></div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer;