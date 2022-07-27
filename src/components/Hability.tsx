import React, { HTMLAttributes, ReactElement } from "react";
import P from "./P";

type HabilityProps = {
    name: string;
    icon: ReactElement;
    text: string;
    percents: number;
} & HTMLAttributes<HTMLDivElement>;

export default function Hability(props: HabilityProps) {
    return (
        <div {...props}>
            <div className="flex items-center mb-1">
                <div className="w-12 h-12 bg-secondary-2 p-2 rounded-full">
                    {props.icon}
                </div>
                <div className="flex flex-col ml-2">
                    <p className="font-bold leading-none mb-0.5">
                        {props.name.toUpperCase()}
                    </p>
                    <P className="leading-none">{props.text}</P>
                </div>
            </div>

            <progress
                max={100}
                value={props.percents}
                color="red"
                className="w-full rounded-full"
            ></progress>
            <p className="text-right font-semibold leading-none">
                {props.percents}%
            </p>
        </div>
    );
}
