import { Grid, TextField } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";


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
                    <div><a href="#" className='footer-link'>aviso de privacidad</a></div>
                    <div><a href="#" className='footer-link'>política de coookies</a></div>
                    <div><a href="https://www.extrategia.com.mx/Metal/" className='footer-link'>únete (METAL)</a></div>
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
        </footer>
    )
}

export default Footer;