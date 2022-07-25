import React from "react";
import { motion } from "framer-motion";
import { withLog } from "../hocs/withLog";

type BobblePos = {
    top: number;
    left: number;
};

type BobbleProps = {
    initial: BobblePos;
    bobbleSize: number;
};

function Bobble({ initial, bobbleSize }: BobbleProps) {
    const [pos] = React.useState<BobblePos>(initial);

    return (
        <motion.div
            style={{
                top: `${initial.top}px`,
                left: `${initial.left}px`,
                width: `${bobbleSize}px`,
                height: `${bobbleSize}px`,
            }}
            animate={{
                top: pos.top,
                left: pos.left,
            }}
            transition={{
                duration: 0.2,
                type: "tween",
                ease: "easeOut",
            }}
            className="bg-green-2 absolute rounded-full blur-lg opacity-40"
        ></motion.div>
    );
}

export default withLog(Bobble, "Renderizou o componente Bobble");
