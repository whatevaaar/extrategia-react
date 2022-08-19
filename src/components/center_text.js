import video from "../assets/video/v1.mov"
import video2 from "../assets/video/v2.mp4"
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography  } from "@mui/material";

const CenterText = () => {
    return (
        <div className="center-text">
            <video className="center-video" controls >
                <source src={video} type="video/mp4" />
            </video>
            <video className="center-video-2" autoPlay muted loop >
                <source src={video2} type="video/mp4" />
            </video>
            <div className="list-div">
                        <List>
                            <ListItem className="center-list-item top-list-border" disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <p className="bullet">&#x2022;</p>
                                    </ListItemIcon>
                                    <ListItemText className="list-text" primary={<Typography className="list-text" type="body2" style={{ fontSize: ".9rem", fontWeight: "bold", textTransform: "uppercase" }}>Comunicación y PR</Typography>} />
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
        </div>);
}
export default CenterText;