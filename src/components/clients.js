import { Grid, } from "@mui/material";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion"
import img1 from '../assets/img/LH_2_0031.JPG'
import img2 from '../assets/img/LH_2_0103.JPG'
import img3 from '../assets/img/LH_2_0224.JPG'
import img4 from '../assets/img/LH_2_0264.JPG'
import img5 from '../assets/img/Extrategia_Web_Portada_01.jpg'
import img6 from '../assets/img/Extrategia_Web_Portada_02.jpg'
import img7 from '../assets/img/Extrategia_Web_Portada_03.jpg'
import img8 from '../assets/img/Extrategia_Web_Portada_04.jpg'
import img9 from '../assets/img/Archivo_000.jpeg'
import img10 from '../assets/img/Archivo_001.jpeg'
import Numeralia from "./numeralia";
const Clients = () => {
    const [imgIndex, setImgIndex] = useState(0);
    const controls = useAnimation();
    const sourcesList = [img1, img2, img2, img3, img4, img5, img6, img7, img8, img9, img10];
    const switchImage = () => {
        controls.start({
            x: "100%",
            backgroundColor: "#f00",
            scale: [.1, 1],
            rotate: [0, -45],
            transition: { duration: 1 },
        });
        if (imgIndex < sourcesList.length - 1) {
            setImgIndex(imgIndex + 1);
        } else {
            setImgIndex(0);
        }
    };
    useEffect(() => {
        const id = setInterval(switchImage, 1000);
        return () => { clearInterval(id) }
    });

    return (
        <div className="div-clients">
            <h2 className="clientes-subtitle">clientes</h2>
            <div className="row sub-clients">
                <div className="div-column-bg-num">
                    <motion.img
                        animate={controls}
                        className="img-num-anim" src={sourcesList[imgIndex]} alt="img transitions" />
                </div>
                <div className="div-column-anim">
                    <div>
                        <p className="number-anim"></p>
                        <p className="text-anim"></p>
                    </div>
                </div>
            </div>
        </div>
    );
}; export default Clients