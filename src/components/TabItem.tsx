import React, { HTMLAttributes, ReactElement } from "react";
import { useGradientAnimation } from "../hooks/useGradientAnimation";

type TabItemProps = {
    name: string;
    icon: ReactElement;
    active: boolean;
    onClick: () => void;
} & HTMLAttributes<HTMLButtonElement>;

export default function TabItem(props: TabItemProps) {
    const { onMouseMove, onMouseOut, gradientX, gradientY } =
        useGradientAnimation();

    return (
        <button
            {...props}
            className={`w-full text-left relative py-4 rounded-md ${props.className}`}
            onMouseMove={onMouseMove}
            onMouseOut={onMouseOut}
            onClick={props.onClick}
        >
            {props.active && (
                <div
                    className="rounded-md capa absolute top-0 left-0 w-full h-full opacity-60"
                    style={{
                        background: `linear-gradient(${gradientY}deg,#37C49F ${
                            gradientX - 100
                        }%,#27E48C)`,
                    }}
                ></div>
            )}

            <div className="relative z-2 font-bold flex items-center px-4">
                <div className="w-7">{props.icon}</div>
                <p className="ml-2">{props.name}</p>
            </div>
        </button>
    );
}
