import React, { HTMLAttributes, ReactNode } from "react";

type SecondaryButtonProps = {
    children: ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

export default function SecondaryButton(props: SecondaryButtonProps) {
    return (
        <button
            className={`bg-secondary-1 w-full h-full rounded-md hover:bg-opacity-70 transition-all ${props.className}`}
        >
            {props.children}
        </button>
    );
}
