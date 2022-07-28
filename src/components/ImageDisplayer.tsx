import React, { Dispatch, SetStateAction } from "react";
import CloseIcon from "../assets/icons/CloseIcon";
import UpDrop from "./UpDrop";

type ImageDisplayerProps = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    image?: string;
};

export default function ImageDisplayer({
    setOpen,
    image,
    open,
}: ImageDisplayerProps) {
    return (
        <>
            {open && (
                <UpDrop setOpen={setOpen}>
                    <button
                        className="absolute top-4 right-4 z-[60] w-6 hover:opacity-70 transition-all"
                        onClick={() => setOpen(false)}
                    >
                        <CloseIcon className="w-full h-full" />
                    </button>
                    <img
                        src={image}
                        className="h-[80%] relative z-40 object-contain"
                        alt=""
                    />
                </UpDrop>
            )}
        </>
    );
}
