import React, { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import AngleRight from "../assets/icons/AngleRight";

type SeeMoreButtonProps = {
    children: ReactNode;
} & LinkProps;

export default function SeeMoreButton(props: SeeMoreButtonProps) {
    return (
        <Link
            {...props}
            className={`flex ${props.className} hover:opacity-75 transition-all`}
        >
            <div className="font-semibold text-[#D2D2D2]">{props.children}</div>
            <div className="w-3 ml-2">
                <AngleRight className="w-full h-full" />
            </div>
        </Link>
    );
}
