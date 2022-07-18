import React, { HTMLAttributes, ReactNode } from "react";

type H1Props = {
    children: ReactNode;
} & HTMLAttributes<HTMLHeadingElement>;

export default function H1(props: H1Props) {
    return (
        <h1
            {...props}
            className={`leading-snug text-4xl md:text-5xl md:leading-snug lg:text-6xl lg:leading-snug font-bold ${props.className}`}
        >
            {props.children}
        </h1>
    );
}
