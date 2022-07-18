import React, { Dispatch, ReactNode, SetStateAction } from "react";
import CloseIcon from "../assets/icons/CloseIcon";

type ModalProps = {
    children: ReactNode;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Modal({ children, open, setOpen }: ModalProps) {
    return (
        <>
            {open && (
                <div className="modalcontainer fixed top-0 left-0 w-full h-[100vh] z-20 bg-black bg-opacity-60 flex items-center justify-center px-6 md:px-16 lg:px-36">
                    <div
                        className="absolute top-0 left-0 w-full h-full"
                        onClick={() => setOpen(false)}
                    ></div>
                    <button
                        className="absolute top-4 right-4 z-[3] w-6 hover:opacity-70 transition-all"
                        onClick={() => setOpen(false)}
                    >
                        <CloseIcon className="w-full h-full" />
                    </button>
                    <div className="modal relative z-[3] w-full bg-secondary-3 py-8 px-8">
                        {children}
                    </div>
                </div>
            )}
        </>
    );
}
