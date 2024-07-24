
import { motion } from "framer-motion";

const Title = ({title}) => {

    const text = title.split(" ");

    return (
            <div className="heading">
                {text.map((el, i) => (
                    <motion.span
                    className="animated-heading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.25,
                        delay: i / 10
                    }}
                    key={i}
                    >
                    {el}{" "}
                    </motion.span>
                ))}
            </div>
    )
}

export default Title;