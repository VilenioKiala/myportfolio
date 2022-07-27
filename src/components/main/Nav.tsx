import React, { HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import MyLogo from "../../assets/icons/MyLogo";
import ToggleIcon from "../../assets/icons/ToggleIcon";
import { withLog } from "../../hocs/withLog";
import PrimaryButton from "../PrimaryButton";
import "./Nav.css";

type NavProps = {
    openModal: () => void;
    openDrawer: () => void;
} & HTMLAttributes<HTMLDivElement>;

function Nav(props: NavProps) {
    return (
        <nav
            {...props}
            className={`mygrid h-16 items-center ${props.className} absolute top-0 left-0 w-full py-3 z-10`}
        >
            <div className="w-11/12">
                <Link to="/">
                    <MyLogo className="w-16 h-full" />
                </Link>
            </div>
            <div className="links hidden md:flex col-start-4 col-end-10 w-full justify-center">
                <div className="flex-[0.5] text-center">
                    <Link to="/" className="font-semibold">
                        HOME
                    </Link>
                </div>
                <div className="flex-[0.5] text-center">
                    <Link to="/trabalhos" className="font-semibold">
                        TRABALHOS
                    </Link>
                </div>
                <div className="flex-[0.5] text-center">
                    <Link to="/sobremim" className="font-semibold">
                        SOBRE MIM
                    </Link>
                </div>
            </div>
            <div className="hidden md:flex col-start-10 col-span-full items-center justify-end">
                <PrimaryButton
                    className="bg-black px-6 py-2"
                    onClick={props.openModal}
                >
                    VAMOS CONVERSAR
                </PrimaryButton>
            </div>
            <button
                className="block col-start-11 col-span-full md:hidden w-8 h-8 hover:opacity-70 transition-all"
                onClick={props.openDrawer}
            >
                <ToggleIcon />
            </button>
        </nav>
    );
}

export default withLog(Nav, "Renderizou a NAV!");
