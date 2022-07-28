import React, { useEffect } from "react";
import { motion } from "framer-motion";
import CarouselItem from "./CarouselItem";
import "./Carousel.css";

type CarouselProps = {
    images: string[];
    delay?: number;
};

function Carousel({ images, delay }: CarouselProps) {
    useEffect(() => {
        console.log("Re-renderizando o carrossel automático");
    }, []);

    return (
        <motion.div
            className="carouse h-[30rem] mt-[-4rem] relative flex overflow-hidden"
            initial={{
                marginLeft: `-${100 * images.length}vw`,
            }}
            animate={{
                marginLeft: "100vw",
            }}
            transition={{
                type: "tween",
                ease: "linear",
                duration: 40,
                repeat: Infinity,
                delay: delay || 0,
            }}
        >
            {images.map((image) => {
                return <CarouselItem image={image} className="flex-shrink-0" />;
            })}
        </motion.div>
    );
}

export default Carousel;
