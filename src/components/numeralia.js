import { motion, useViewportScroll, useTransform } from "framer-motion"
const Numeralia = () => {

    const { scrollYProgress } = useViewportScroll()
    const xPosAnimSub1 = useTransform(scrollYProgress, [0, 1,], [1, 850,])
    const xPosAnimSub2 = useTransform(scrollYProgress, [0, 1,], [1, 650,])
    const xPosAnimSub3 = useTransform(scrollYProgress, [0, 1,], [1, 450,])
    const xPosAnimSub4 = useTransform(scrollYProgress, [0, 1,], [1, 250,])
    return (
        <div className="div-numeralia">
            <motion.div className="numeralia-data"
                style={{
                    x: xPosAnimSub1,
                    xPosAnimSub1
                }}
            >
                <p className="numeralia-num">190</p>
                <p className="numeralia-text">portadas en medios</p>
            </motion.div>

            <motion.div className="numeralia-data"

                style={{
                    x: xPosAnimSub2
                }}
            >
                <p className="numeralia-num">195</p>
                <p className="numeralia-text">eventos estrágicos</p>
            </motion.div>
            <motion.div className="numeralia-data"
                style={{
                    x: xPosAnimSub3
                }}
            >
                <p className="numeralia-num">+450M</p>
                <p className="numeralia-text">roi anual para nuestros clientes</p>
            </motion.div>
            <motion.div className="numeralia-data"
                style={{
                    x: xPosAnimSub4
                }}
            >
                <p className="numeralia-num">+400k</p>
                <p className="numeralia-text">seguidores en redes administrativas</p>
            </motion.div>
        </div>
    )
}

export default Numeralia;