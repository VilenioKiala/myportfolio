import React, { Dispatch, SetStateAction } from "react";
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
                    <img
                        src={image}
                        className="h-[98%] relative z-40 object-contain"
                        alt=""
                    />
                </UpDrop>
            )}
        </>
    );
}
