import mainImg from "../assets/img/cats.jpg"
import { motion, useViewportScroll, useTransform } from "framer-motion"


const RightImg = () => {
    const { scrollYProgress } = useViewportScroll()
    const yPosAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0, 100, 200])

    return (
        <div className="right-img-div">
            <motion.div
                style={{
                    y: yPosAnim,
                }}
            >
                <img className='right-img' alt="img" src={mainImg}></img>
            </motion.div>
        </div>
    )
}

export default RightImg;