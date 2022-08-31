import { motion, useViewportScroll, useTransform } from "framer-motion"
import mainImg from "../assets/img/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const { scrollYProgress } = useViewportScroll()
    const xPosAnimSub = useTransform(scrollYProgress, [0, 1,], [0, 650,])
    return (
        <div className="header-div">
            <img
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
            <a href={"#center-content"}>
                <FontAwesomeIcon className="arrow-down-icon" icon={faChevronDown} />
            </a>
        </div>
    )
}

export default Header;