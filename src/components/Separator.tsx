import React, { HTMLAttributes } from "react";

type SeparatorProps = {} & HTMLAttributes<HTMLDivElement>;

export default function Separator({
    className,
    ...otherProps
}: SeparatorProps) {
    return (
        <div
            {...otherProps}
            className={`w-full h-[0.1rem] bg-secondary-2 ${className}`}
        ></div>
    );
}
