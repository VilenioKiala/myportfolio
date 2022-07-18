import React from "react";
import { motion } from "framer-motion";

type AutomaticCarouselProps = {
    images: string[];
};

export default function AutomaticCarousel({ images }: AutomaticCarouselProps) {
    return (
        <div className="h-96 mt-[-4rem] w-full relative overflow-hidden">
            <motion.div
                className={`absolute left-0 top-0 w-full h-full flex flex-nowrap`}
                initial={{ left: -500 * images.length }}
                animate={{ left: window.innerWidth }}
                transition={{
                    duration: 30,
                    type: "tween",
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {images.map((image, i) => {
                    return (
                        <motion.div className="h-full w-[500px] mx-3 flex-none">
                            <img
                                src={image}
                                alt=""
                                className="h-full w-full object-cover block"
                            />
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}
