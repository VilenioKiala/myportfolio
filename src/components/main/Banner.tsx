import React, { HTMLAttributes, ReactNode } from "react";

type BannerProps = {
    children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export default function Banner(props: BannerProps) {
    return (
        <div
            {...props}
            className={`text-center flex flex-col items-center ${props.className}`}
        >
            {props.children}
        </div>
    );
}
