import React, { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import EmailIconStroke from "../../assets/icons/EmailIconStroke";
import InstragramIconStroke from "../../assets/icons/InstragramIconStroke";
import MessengerIcon from "../../assets/icons/MessengerIcon";
import MyLogo from "../../assets/icons/MyLogo";
import WhatsAppIconStroke from "../../assets/icons/WhatsAppIconStroke";
import { Emphasis } from "../Emphasis";
import Modal from "../Modal";
import P from "../P";
import SectionTitle from "../SectionTitle";

type TalkModalProps = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function TalkModal({ open, setOpen }: TalkModalProps) {
    return (
        <Modal open={open} setOpen={setOpen}>
            <div className="text-center">
                <div className="w-40 m-auto">
                    <MyLogo />
                </div>
                <SectionTitle>
                    Vamos <Emphasis>Bater Um Papo</Emphasis> Sobre As Suas{" "}
                    <Emphasis>Ideias?</Emphasis>
                </SectionTitle>
                <P>
                    Estou 100% disponível para servi-lo. Fique à vontade para
                    conversar através no meio mais conveniente para si!
                </P>
                <div className="meios flex justify-center mt-3">
                    <Link
                        to={{
                            pathname:
                                "https://www.messenger.com/t/100075791822724",
                        }}
                        target="_blank"
                        className="w-12 mx-1"
                    >
                        <MessengerIcon />
                    </Link>
                    <Link
                        to={{
                            pathname:
                                "https://api.whatsapp.com/send?phone=244946741239&text=As%20melhores%20solu%C3%A7%C3%B5es%20de%20TI%20para%20si!",
                        }}
                        target="_blank"
                        className="w-12 mx-1"
                    >
                        <WhatsAppIconStroke />
                    </Link>
                    <Link
                        to={{
                            pathname: "https://instagram.com/ander.coimbra/",
                        }}
                        target="_blank"
                        className="w-12 mx-1"
                    >
                        <InstragramIconStroke />
                    </Link>
                    <Link
                        to={{
                            pathname: "mailto: andersonvitalena@hotmail.com",
                        }}
                        target="_blank"
                        className="w-10 mx-1"
                    >
                        <EmailIconStroke />
                    </Link>
                </div>
            </div>
        </Modal>
    );
}
