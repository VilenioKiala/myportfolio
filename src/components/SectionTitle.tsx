import React, { HTMLAttributes, ReactNode } from "react";
import H2 from "./H2";
import P from "./P";
type SectionTitleProps = {
    preTitle?: string;
    children: ReactNode;
    text?: string;
} & HTMLAttributes<HTMLDivElement>;

export default function SectionTitle({
    children,
    text,
    preTitle,
    className,
    ...otherProps
}: SectionTitleProps) {
    return (
        <div {...otherProps} className={`${className}`}>
            <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-2 to-green-1">
                {preTitle}
            </p>
            <H2>{children}</H2>
            <P>{text}</P>
        </div>
    );
}
