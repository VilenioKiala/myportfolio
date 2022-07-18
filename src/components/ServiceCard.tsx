import React, { HTMLAttributes, ReactElement } from "react";
import WebsiteIcon from "../assets/icons/WebsiteIcon";
import { useGradientAnimation } from "../hooks/useGradientAnimation";
import P from "./P";
import "./ServiceCard.css";

export type ServiceCardProps = {
    Icon: ReactElement;
    title: string;
    text: string;
} & HTMLAttributes<HTMLDivElement>;

export default function ServiceCard(props: ServiceCardProps) {
    const { onMouseMove, onMouseOut, gradientX, gradientY } =
        useGradientAnimation();

    return (
        <div
            className={`servicecard ${props.className} bg-secondary-2 relative py-4 px-3 w-full rounded-md `}
            onMouseMove={onMouseMove}
            onMouseOut={onMouseOut}
        >
            <div
                className="capa absolute top-0 left-0 w-full h-full rounded-md"
                style={{
                    background: `linear-gradient(${gradientY}deg,#37C49F ${
                        gradientX - 100
                    }%,#27E48C)`,
                }}
            ></div>
            <div className="relative z-2">
                <div className="w-14 h-14">{props.Icon}</div>
                <p className="font-bold ">{props.title}</p>
                <P className="">{props.text}</P>
            </div>
        </div>
    );
}
