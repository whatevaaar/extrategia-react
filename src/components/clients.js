import { Grid, } from "@mui/material";
const Clients = () => {
    return (
        <div className="div-clients">
            <h2 className="clientes-subtitle">clientes</h2>
            <Grid container alignItems="center">
                <Grid item xs={5} sm={5} md={5}>
                    <p className="clientes-num">+50</p>
                    <p className="clientes-text">clientes activos</p>
                </Grid>
                <Grid item xs={7} sm={7} md={7}>
                    <Grid container alignItems="center">
                        <Grid>
                            <img className="img-num-anim" alt="img transitions" />
                        </Grid>
                        <Grid>
                            <div className="div-column-anim">
                                <p className="number-anim"></p>
                                <p className="text-anim"></p>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </div>
    );
}; export default Clients