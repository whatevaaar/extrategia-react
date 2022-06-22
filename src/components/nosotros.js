import { Grid, } from "@mui/material";
import mainImg from "../assets/img/cats.jpg"
const Nosotros = () => {
    return (
        <div className="nosotros-div">
            <Grid container spacing={2}>
                <Grid item xs={6} className="nosotros-left">
                    <h1 className="nosotros-header">nosotros</h1>
                </Grid>
                <Grid item xs={6} className="nosotros-right">
                    <img className='nosotros-img' alt="img" src={mainImg}></img>
                </Grid>
            </Grid>
        </div>
    );
}
export default Nosotros;