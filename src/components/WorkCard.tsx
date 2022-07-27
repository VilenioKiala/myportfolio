/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Dispatch, HTMLAttributes, SetStateAction } from "react";
import { Link } from "react-router-dom";
import P from "./P";
import PrimaryButton from "./PrimaryButton";

type WorkCardProps = {
    image: string;
    name: string;
    text: string;
    link?: string;
    setImageOnDisplayer: Dispatch<SetStateAction<string>>;
    openImageDisplayer: () => void;
} & HTMLAttributes<HTMLDivElement>;

export default function WorkCard({
    className,
    image,
    name,
    text,
    setImageOnDisplayer,
    openImageDisplayer,
    link,
    ...otherProps
}: WorkCardProps) {
    return (
        <div {...otherProps} className={`text-left ${className}`}>
            <button
                className={`w-full h-44 bg-cover bg-center`}
                style={{
                    backgroundImage: `url(${image})`,
                }}
                onClick={() => {
                    setImageOnDisplayer(image);
                    openImageDisplayer();
                }}
            ></button>
            <p className="font-semibold mt-1">{name.toUpperCase()}</p>
            <P>{text.slice(0, 180)}...</P>
            {link && (
                <Link
                    to={{
                        pathname: link,
                    }}
                    target="_blank"
                >
                    <PrimaryButton className="mt-2 px-4 py-1">
                        Ver de Perto
                    </PrimaryButton>
                </Link>
            )}
        </div>
    );
}
