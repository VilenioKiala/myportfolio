import React, { HTMLAttributes, ReactNode } from "react";
import "./P.css";
type PProps = {
    children: ReactNode;
} & HTMLAttributes<HTMLParagraphElement>;

export default function P(props: PProps) {
    return (
        <p {...props} className={`textocorrido ${props.className}`}>
            {props.children}
        </p>
    );
}
