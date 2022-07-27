import React, { Dispatch, ReactNode, SetStateAction } from "react";

type UpDropProps = {
    children: ReactNode;
    setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function UpDrop({ children, setOpen }: UpDropProps) {
    return (
        <div className="fixed top-0 left-0 w-full h-[100vh] z-[500] bg-black bg-opacity-60 flex items-center justify-center px-6 md:px-16 lg:px-36">
            <div
                className="absolute top-0 left-0 w-full h-full"
                onClick={() => setOpen(false)}
            ></div>
            {children}
        </div>
    );
}
