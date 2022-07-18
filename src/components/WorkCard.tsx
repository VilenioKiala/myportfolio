/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { HTMLAttributes } from "react";
import P from "./P";
import PrimaryButton from "./PrimaryButton";

type WorkCardProps = {
    image: string;
    name: string;
    text: string;
    link: string;
    mobileLink: string;
} & HTMLAttributes<HTMLDivElement>;

export default function WorkCard(props: WorkCardProps) {
    return (
        <div {...props} className={`${props.className}`}>
            <div
                className={`w-full h-44 bg-cover bg-center`}
                style={{
                    backgroundImage: `url(${props.image})`,
                }}
            ></div>
            <p className="font-semibold">{props.name}</p>
            <P>{props.text.slice(0, 180)}...</P>
            <a href="#" target="_blank">
                <PrimaryButton className="px-4 py-2">asdasasd</PrimaryButton>
            </a>
        </div>
    );
}
