import React, { Dispatch, ReactNode, SetStateAction } from "react";
import CloseIcon from "../assets/icons/CloseIcon";
import UpDrop from "./UpDrop";

export type ModalProps = {
    children?: ReactNode;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Modal({ children, open, setOpen }: ModalProps) {
    return (
        <>
            {open && (
                <UpDrop setOpen={setOpen}>
                    <button
                        className="absolute top-4 right-4 z-[3] w-6 hover:opacity-70 transition-all"
                        onClick={() => setOpen(false)}
                    >
                        <CloseIcon className="w-full h-full" />
                    </button>
                    <div className="modal relative z-[3] w-full bg-secondary-3 py-8 px-8">
                        {children}
                    </div>
                </UpDrop>
            )}
        </>
    );
}
