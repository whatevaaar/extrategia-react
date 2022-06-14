import Marquee from "react-fast-marquee";
import { Grid } from "@mui/material";
const Numeralia = () => {
    return (
        <div className="div-numeralia">

            <Grid container>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <h1 className="header-numeralia">582</h1>
                    <h2 className="sub-header-numeralia">DAYS OF</h2>
                    <Grid item xs={3}></Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        <Marquee speed={100} style={{ borderStyle: "solid", borderWidth: ".2rem", fontSize: "5rem", textTransform: "uppercase", borderRadius: "500px", color:"orange", fontWeight: "bold"}}>
                            I can be a React component, multiple React components, or just some text.
                        </Marquee></Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Numeralia;