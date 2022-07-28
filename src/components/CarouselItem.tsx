import React, { HTMLAttributes } from "react";
import { motion, MotionProps } from "framer-motion";

type CarouselItemProps = {
    image: string;
} & MotionProps &
    HTMLAttributes<HTMLDivElement>;

export default function CarouselItem({
    image,
    className,
    ...otherProps
}: CarouselItemProps) {
    return (
        <motion.div
            className={`w-screen h-full ${className} flex items-center justify-center`}
            {...otherProps}
        >
            <div
                className="w-[96vw] h-full bg-cover bg-center bg-no-repeat mx-[-32rem]"
                style={{ backgroundImage: `url(${image})` }}
            ></div>
        </motion.div>
    );
}
