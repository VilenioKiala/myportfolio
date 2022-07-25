import React from "react";
import AndroidIcon from "../assets/icons/AndroidIcon";
import AngleRight from "../assets/icons/AngleRight";
import DesktopIcon from "../assets/icons/DesktopIcon";
import ScriptIcon from "../assets/icons/ScriptIcon";
import WebsiteIcon from "../assets/icons/WebsiteIcon";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import { ServiceCardProps } from "./ServiceCard";

type ServiceSliderProps = {
    serviceData: ServiceCardProps[];
};

export default function ServiceSlider(props: ServiceSliderProps) {
    const [actualService, setActualService] = React.useState<number>(0);

    return (
        <>
            <div className="w-full h-80 relative overflow-hidden">
                <motion.div
                    className="absolute flex"
                    animate={{ left: -303 * actualService }}
                    transition={{
                        type: "tween",
                        ease: "easeOut",
                    }}
                >
                    {props.serviceData.map((data, i) => {
                        return (
                            <ServiceCard
                                key={i}
                                Icon={data.Icon}
                                title={data.title}
                                text={data.text}
                                className="flex-none w-72 mr-4"
                            />
                        );
                    })}
                </motion.div>
            </div>
            <div className="flex justify-end">
                <button
                    disabled={actualService === 0}
                    onClick={() => setActualService(actualService - 1)}
                    className="w-10 h-10 p-[0.85rem] border-[1px] border-solid border-green-2 hover:bg-secondary-1 transition-all rounded-full flex items-center justify-center  disabled:opacity-25"
                >
                    <AngleRight className="w-full rotate-180" />
                </button>
                <button
                    className="w-10 h-10 p-[0.85rem] border-[1px] hover:bg-secondary-1 transition-all border-solid border-green-2 rounded-full flex items-center justify-center ml-4 disabled:opacity-25"
                    onClick={() => setActualService(actualService + 1)}
                    disabled={actualService === props.serviceData.length - 1}
                >
                    <AngleRight className="w-full" />
                </button>
            </div>
        </>
    );
}
