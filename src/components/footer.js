import { Grid } from '@mui/material';

const Footer = () => {
    return (
        <footer>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <p>xs=3</p>
                </Grid>
                <Grid item xs={6}>
                    <p>xs=6</p>
                </Grid>
                <Grid item xs={3}>
                    <p>xs=3</p>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer;