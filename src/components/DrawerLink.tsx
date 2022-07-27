import React, { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import { useGradientAnimation } from "../hooks/useGradientAnimation";

type DrawerLinkProps = {
    active: boolean;
    icon: JSX.Element;
    children: ReactNode;
} & LinkProps;

export default function DrawerLink(props: DrawerLinkProps) {
    const { onMouseMove, onMouseOut, gradientX, gradientY } =
        useGradientAnimation();

    return (
        <Link
            {...props}
            className={`w-full text-left relative py-4 rounded-md ${props.className}`}
            onMouseMove={onMouseMove}
            onMouseOut={onMouseOut}
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
                <p className="ml-2">{props.children}</p>
            </div>
        </Link>
    );
}
