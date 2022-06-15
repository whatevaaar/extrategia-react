import { Box, Grid, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mainImg from "../assets/img/cats.jpg"
import {
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
});


const Footer = () => {
    return (
        <footer>
            <Grid container spacing={2}>
                <Grid item xs={3}>
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
                </Grid>
                <Grid item xs={6}>
                    <p className='footer-subtitle'>JOIN THE MOVEMENT</p>
                    <p className='footer-title'>Sign up with your email address to receive news and updates</p>
                    <Box>
                        <Grid container>
                            <Grid item>
                                <CssTextField className="footer-input" />
                                <Button className="footer-input-button" variant="contained" endIcon={<FontAwesomeIcon icon={faPaperPlane} />}>Send</Button>
                            </Grid></Grid>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <img src={mainImg} className="footer-img" alt="Footer img" />
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer;