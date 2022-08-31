import { Grid, } from "@mui/material";
const Numeralia = () => {

    return (
        <div className="div-numeralia">
            <Grid container>
                <Grid item xs={2} sm={3} md={3}>
                    <p className="numeralia-num">190</p>
                    <p className="numeralia-text">portadas en medios</p>
                </Grid>
                <Grid item xs={2} sm={3} md={3}>
                    <p className="numeralia-num">195</p>
                    <p className="numeralia-text">eventos estrágicos</p>
                </Grid>
                <Grid item xs={2} sm={3} md={3}>
                    <p className="numeralia-num">+450M</p>
                    <p className="numeralia-text">roi anual generado</p>
                </Grid>
                <Grid item xs={2} sm={3} md={3}>
                    <p className="numeralia-num">+400k</p>
                    <p className="numeralia-text">seguidores en redes</p>
                </Grid></Grid>
        </div>
    )
}

export default Numeralia;