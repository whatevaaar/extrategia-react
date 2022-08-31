import { Grid } from "@mui/material";
import mainImg from "../assets/img/EXTRATEGIA_2022_TEXTO_01.png"

const CenterAnimation = () => {
    return (
        <div className="row center-animation">
            <div className="center-animation-text-div">
                <p className="center-animation-text">

                </p>
            </div>

            <div className="center-animation-img-div">
                <img className="center-animation-img" src={mainImg} alt="bg-img" />
            </div>
        </div>
    );
}

export default CenterAnimation;