import React, { Dispatch, SetStateAction } from "react";
import MyLogo from "../../assets/icons/MyLogo";
import Separator from "../Separator";
import { useLocation } from "react-router-dom";
import DrawerLink from "../DrawerLink";
import UpDrop from "../UpDrop";

type DrawerProps = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Drawer({ setOpen, open }: DrawerProps) {
    const { pathname } = useLocation();

    return (
        <>
            {open && (
                <UpDrop setOpen={setOpen}>
                    <div className="absolute z-[3] right-0 w-4/5 h-full bg-secondary-3 py-8 px-8">
                        <div className="w-14 h-14">
                            <MyLogo />
                        </div>
                        <Separator className="my-2" />
                        <div className="drawerlinks flex flex-col">
                            <DrawerLink
                                to={{ pathname: "/" }}
                                active={pathname === "/"}
                                icon={<></>}
                                onClick={() => setOpen(false)}
                            >
                                HOME
                            </DrawerLink>
                            <DrawerLink
                                to={{ pathname: "/trabalhos" }}
                                active={pathname === "/trabalhos"}
                                icon={<></>}
                                onClick={() => setOpen(false)}
                            >
                                MEUS TRABALHOS
                            </DrawerLink>
                            <DrawerLink
                                to={{ pathname: "/sobremim" }}
                                active={pathname === "/sobremim"}
                                icon={<></>}
                                onClick={() => setOpen(false)}
                            >
                                SOBRE MIM
                            </DrawerLink>
                        </div>
                    </div>
                </UpDrop>
            )}
        </>
    );
}
