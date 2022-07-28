import React from "react";
import { motion } from "framer-motion";
import { withLog } from "../hocs/withLog";

type BobblePos = {
    top: number;
    left: number;
};

type BobbleProps = {
    initial: BobblePos;
    end: BobblePos;
    bobbleSize: number;
};

function Bobble({ initial, bobbleSize, end }: BobbleProps) {
    return (
        <motion.div
            style={{
                top: `${initial.top}%`,
                left: `${initial.left}%`,
                width: `${bobbleSize}px`,
                height: `${bobbleSize}px`,
            }}
            initial={{
                top: `${initial.top}%`,
                left: `${initial.left}%`,
            }}
            animate={{
                top: `${end.top}%`,
                left: `${end.left}%`,
            }}
            transition={{
                duration: 30,
                type: "tween",
                ease: "easeInOut",
                repeatType: "reverse",
                repeat: Infinity,
            }}
            className="bg-green-2 absolute rounded-full blur-lg opacity-40"
        ></motion.div>
    );
}

export default withLog(Bobble, "Renderizou o componente Bobble");
