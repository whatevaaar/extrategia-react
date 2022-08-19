import { motion, useViewportScroll, useTransform } from "framer-motion"
import mainImg from "../assets/img/logo.png"

const Header = () => {
    const { scrollYProgress } = useViewportScroll()
    const  yPosAnimImg= useTransform(scrollYProgress, [0, 40,], [0, 750,])
    const xPosAnimSub = useTransform(scrollYProgress, [0, 1,], [0, 650,])

    return (
        <div className="header-div">
            <motion.img
                style={{
                    y: yPosAnimImg,
                }}
                alt="img" src={mainImg} className="header-img" />
            <motion.h2
                animate={{ scale: 2 }}
                transition={{ duration: 0.8 }}
                style={{
                    x: xPosAnimSub
                }}
                className="header-influence">Influence</motion.h2>
            <motion.h2
                animate={{ scale: 2 }}
                transition={{ duration: 0.8 }}
                style={{
                    x: xPosAnimSub
                }}
                className="header-to">to</motion.h2>
            <motion.h2
                animate={{ scale: 2 }}
                transition={{ duration: 0.8 }}
                style={{
                    x: xPosAnimSub
                }}
                className="header-reputation">reputation</motion.h2>
                
        </div>
    )
}

export default Header;