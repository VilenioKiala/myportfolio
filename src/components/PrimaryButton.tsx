import React, { HTMLAttributes, ReactNode } from "react";
import "./PrimaryButton.css";

type PrimaryButtonProps = {
    children: ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

export default function PrimaryButton(props: PrimaryButtonProps) {
    return (
        <button
            {...props}
            className={`primarybutton rounded-md relative ${props.className}`}
        >
            <div className="capa absolute rounded-md w-full h-full top-0 left-0 bg-gradient-to-r from-green-2 to-green-1 opacity-80"></div>
            <div className="relative z-2 font-semibold">{props.children}</div>
        </button>
    );
}
