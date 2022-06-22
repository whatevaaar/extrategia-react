import { motion, useViewportScroll, useTransform } from "framer-motion"
import mainImg from "../assets/img/logo.png"
import Marquee from "react-fast-marquee";

const Header = () => {
    const { scrollYProgress } = useViewportScroll()
    const yPosAnimSub = useTransform(scrollYProgress, [0, 40,], [0, 750,])
    const xPosAnimSub = useTransform(scrollYProgress, [0, 1,], [0, 650,])

    const yPosAnimImg = useTransform(scrollYProgress, [0, 1,], [0, 1050,])
    return (
        <div className="header-div">
            <motion.h2
                style={{
                    y: yPosAnimSub,
                    x: xPosAnimSub
                }}
                className="header-subtitle">Influence to reputation</motion.h2>
            <motion.img
                animate={{ scale: 2 }}
                transition={{ duration: 0.8 }}
                style={{
                    y: yPosAnimImg,
                }}
                alt="img" src={mainImg} className="header-img" />
                
        </div>
    )
}

export default Header;