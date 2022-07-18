import React, { HTMLAttributes, ReactNode } from "react";

type EmphasisProps = {
    children: ReactNode;
} & HTMLAttributes<HTMLSpanElement>;

export function Emphasis(props: EmphasisProps) {
    return (
        <span
            {...props}
            className={`text-transparent bg-clip-text bg-gradient-to-r from-green-2 to-green-1 ${props.className}`}
        >
            {props.children}
        </span>
    );
}
