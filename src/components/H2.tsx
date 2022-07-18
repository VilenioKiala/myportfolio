import React, { HTMLAttributes, ReactNode } from "react";

type H2Props = {
    children: ReactNode;
} & HTMLAttributes<HTMLHeadingElement>;

export default function H2(props: H2Props) {
    return (
        <h2
            {...props}
            className={`text-4xl font-bold leading-snug ${props.className}`}
        >
            {props.children}
        </h2>
    );
}
