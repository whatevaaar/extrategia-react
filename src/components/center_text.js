import { List, ListItemButton, ListItemText, ListItem, ListItemIcon, Typography, Grid } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { motion } from "framer-motion"

const CenterText = () => {
    return (
        <div className="center-text">
            <Grid container spacing={2}>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <Carousel showThumbs={false} infiniteLoop autoPlay animationHandler={"fade"} showIndicators={false} className="center-carousel">
                        <div>
                            <p className="center-text-p">Empresa global de comunicación, PR y marketing con más de 23 años de experiencia creando, desarrollando y ejecutando estrategias de
                                comunicación corporativa, institucional y de marcas para lograr alianzas eficientes entre sus clientes, los medios de comunicación y su entorno digital.</p>
                        </div>
                        <div>
                            <p className="center-text-p">Es una agencia que entiende la importancia crucial de la información a través de diferentes plataformas y responden de forma
                                inmediata con información exclusiva y de calidad para poder generar notas de alto valor para los lectores.
                                Alberto Aguilar / Forbes
                            </p>
                        </div>
                        <div>
                            <p className="center-text-p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                                - Juan Francisco Aguilar / DELL
                            </p>
                        </div>
                    </Carousel>
                    <div className="center-subtext">
                        <motion.p
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bold-subtitle">Qué hacemos</motion.p>
                    </div>
                    <div className="list-div">
                        <List>
                            <ListItem className="center-list-item top-list-border" disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <p className="bullet">&#x2022;</p>
                                    </ListItemIcon>
                                    <ListItemText className="list-text" primary={<Typography type="body2" style={{ fontSize: ".9rem", fontWeight: "bold", textTransform: "uppercase" }}>Comunicación y PR</Typography>} />
                                </ListItemButton>
                            </ListItem>


                            <ListItem className="center-list-item" disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <p className="bullet">&#x2022;</p>
                                    </ListItemIcon>
                                    <ListItemText className="list-text" primary={<Typography type="body2" style={{ fontSize: ".9rem", fontWeight: "bold", textTransform: "uppercase" }}>Influencer</Typography>} />
                                </ListItemButton>
                            </ListItem>


                            <ListItem className="center-list-item" disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <p className="bullet">&#x2022;</p>
                                    </ListItemIcon>
                                    <ListItemText className="list-text" primary={<Typography type="body2" style={{ fontSize: ".9rem", fontWeight: "bold", textTransform: "uppercase" }}>Branding</Typography>} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem className="center-list-item" disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <p className="bullet">&#x2022;</p>
                                    </ListItemIcon>
                                    <ListItemText className="list-text" primary={<Typography type="body2" style={{ fontSize: ".9rem", fontWeight: "bold", textTransform: "uppercase" }}>inbound mkt</Typography>} />
                                </ListItemButton>
                            </ListItem>


                            <ListItem className="center-list-item" disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <p className="bullet">&#x2022;</p>
                                    </ListItemIcon>
                                    <ListItemText className="list-text" primary={<Typography type="body2" style={{ fontSize: ".9rem", fontWeight: "bold", textTransform: "uppercase" }}>estrategia digital</Typography>} />
                                </ListItemButton>
                            </ListItem>

                            <ListItem className="center-list-item" disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <p className="bullet">&#x2022;</p>
                                    </ListItemIcon>
                                    <ListItemText className="list-text" primary={<Typography type="body2" style={{ fontSize: ".9rem", fontWeight: "bold", textTransform: "uppercase" }}>inteligencia</Typography>} />
                                </ListItemButton>
                            </ListItem>

                            <ListItem className="center-list-item" disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <p className="bullet">&#x2022;</p>
                                    </ListItemIcon>
                                    <ListItemText className="list-text" primary={<Typography type="body2" style={{ fontSize: ".9rem", fontWeight: "bold", textTransform: "uppercase" }}>entrenamientos</Typography>} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </div>
                </Grid>
                <Grid item xs={3}>
                </Grid>
            </Grid>

        </div>);
}
export default CenterText;