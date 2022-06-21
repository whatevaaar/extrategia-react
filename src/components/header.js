import { motion, useViewportScroll, useTransform } from "framer-motion"
import mainImg from "../assets/img/cats.jpg"
import Marquee from "react-fast-marquee";

const Header = () => {
    const { scrollYProgress } = useViewportScroll()
    const yPosAnimSub = useTransform(scrollYProgress, [0, 0.5, 200], [0, 750, 800])
    const xPosAnimSub = useTransform(scrollYProgress, [0, 0.5, 200], [0, 150, 300])

    const yPosAnimTitle1 = useTransform(scrollYProgress, [0, 0.5, 100], [0, 750, 800])
    const xPosAnimTitle1 = useTransform(scrollYProgress, [0, 0.5, -400], [0, 150, 200])

    const yPosAnimTitle2 = useTransform(scrollYProgress, [0, 0.5, 100], [0, 450, 500])
    const xPosAnimTitle2 = useTransform(scrollYProgress, [0, 0.5, 200], [0, 150, 300])

    const yPosAnimImg = useTransform(scrollYProgress, [0, 0.5, -200], [0, 750, 800])
    return (
        <div className="header-div">
            <motion.h2
                style={{
                    y: yPosAnimSub,
                    x: xPosAnimSub
                }}
                className="header-subtitle">Influence to</motion.h2>
            <motion.h1
                style={{
                    y: yPosAnimTitle1,
                    x: xPosAnimTitle1
                }}
                className="header-title">Reputation</motion.h1>
            <motion.h1
                style={{
                    y: yPosAnimTitle2,
                    x: xPosAnimTitle2
                }}
                className="header-title">Extrategia</motion.h1>
            <motion.img
                style={{
                    y: yPosAnimImg,
                }}
                alt="img" src={mainImg} className="header-img" />

            <Marquee speed={100} style={{ fontSize: "2rem", textTransform: "uppercase", color: "orange", fontWeight: "bold" }}>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    )
}

export default Header;