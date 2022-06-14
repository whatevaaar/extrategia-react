import { Grid } from "@mui/material";
import { List, ListItemButton, ListItemText, ListItem, ListItemIcon, Typography } from "@mui/material";

const CenterText = () => {
    return (
        <div className="center-text">
            <Grid container spacing={2}>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <p className="bold-subtitle">
                        IN 1984, ETHIOPIA EXPERIENCED A FAMINE IN WHICH AN ESTIMATED 1.2 MILLION PEOPLE DIED OF STARVATION.
                    </p>
                    <p className="center-text-p">Many foreigners remember this: in 1985 about one-third of the world’s population watched a pop concert to raise money for starving
                        Ethiopians due to a man-made famine. Once again, the blockade of food is being used as a weapon of war against innocent civilians.
                        Millions may die if the world doesn"t act soon.</p>
                    <div className="center-subtext">
                        <p className="bold-subtitle">WHAT IS HAPPENING?</p>
                        <p className="subtitle-text">
                            THERE IS A GENOCIDAL WAR RAGING TIGRAY WHERE 70K + CIVILIANS HAVE BEEN KILLED, 5.2 MILLION PEOPLE ARE FACING FAMINE & 2 MILLION PEOPLE HAVE BEEN DISPLACED. FOR OVER A YEAR TIGRAY HAS EXPERIENCED:
                        </p>
                    </div>
                    <div className="list-div">
                        <List>
                            <ListItem className="center-list-item top-list-border" disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <p className="bullet">&#x2022;</p>
                                    </ListItemIcon>
                                    <ListItemText className="list-text" primary={<Typography type="body2" style={{ fontSize: ".9rem", fontWeight: "bold", textTransform: "capitalize" }}>MyTitle</Typography>} />
                                </ListItemButton>
                            </ListItem>


                            <ListItem className="center-list-item" disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <p className="bullet">&#x2022;</p>
                                    </ListItemIcon>
                                    <ListItemText className="list-text" primary={<Typography type="body2" style={{ fontSize: ".9rem", fontWeight: "bold", textTransform: "capitalize" }}>MyTitle</Typography>} />
                                </ListItemButton>
                            </ListItem>


                            <ListItem className="center-list-item" disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <p className="bullet">&#x2022;</p>
                                    </ListItemIcon>
                                    <ListItemText className="list-text" primary={<Typography type="body2" style={{ fontSize: ".9rem", fontWeight: "bold", textTransform: "capitalize" }}>MyTitle</Typography>} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem className="center-list-item" disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <p className="bullet">&#x2022;</p>
                                    </ListItemIcon>
                                    <ListItemText className="list-text" primary={<Typography type="body2" style={{ fontSize: ".9rem", fontWeight: "bold", textTransform: "capitalize" }}>MyTitle</Typography>} />
                                </ListItemButton>
                            </ListItem>


                            <ListItem className="center-list-item" disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <p className="bullet">&#x2022;</p>
                                    </ListItemIcon>
                                    <ListItemText className="list-text" primary={<Typography type="body2" style={{ fontSize: ".9rem", fontWeight: "bold", textTransform: "capitalize" }}>MyTitle</Typography>} />
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