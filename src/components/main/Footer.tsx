import React, { HTMLAttributes } from "react";
import H2 from "../H2";
import P from "../P";
import { Emphasis as E } from "../Emphasis";
import InstagramIcon from "../../assets/icons/InstagramIcon";
import LinkedInIcon from "../../assets/icons/LinkedInIcon";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import WhatsAppIcon from "../../assets/icons/WhatsAppIcon";
import MyLogo from "../../assets/icons/MyLogo";
import { Link } from "react-router-dom";

type FooterProps = HTMLAttributes<HTMLDivElement>;

export default function Footer(props: FooterProps) {
    return (
        <footer className="px-6 md:px-16 lg:px-36 mygrid bg-secondary-2 pt-10 pb-3">
            <div className="col-start-1 col-end-13 md:col-start-2 md:col-end-12 lg:col-start-3 lg:col-end-11 text-center flex flex-col items-center">
                <div className="w-24">
                    <MyLogo className="w-full h-full" />
                </div>

                <H2 className="leading-none">
                    Vamos <E>Conversar?</E>
                </H2>

                <P>
                    Estou sempre aberto a resolver os seus problemas e discutir
                    sobre os seus projectos
                </P>

                <div className="redes flex mt-2">
                    <Link
                        to={{
                            pathname: `https://instagram.com/ander.coimbra/`,
                        }}
                        target="_blank"
                        className="w-9 mx-1"
                    >
                        <InstagramIcon className="w-full h-full" />
                    </Link>
                    <Link
                        to={{
                            pathname:
                                "https://www.linkedin.com/in/vil%C3%A9niokiala/",
                        }}
                        target="_blank"
                        className="w-9 mx-1"
                    >
                        <LinkedInIcon className="w-full h-full" />
                    </Link>
                    <Link
                        to={{
                            pathname:
                                "https://www.facebook.com/profile.php?id=100075791822724",
                        }}
                        target="_blank"
                        className="w-9 mx-1"
                    >
                        <FacebookIcon className="w-full h-full" />
                    </Link>
                    <Link
                        to={{
                            pathname:
                                "https://api.whatsapp.com/send?phone=244946741239&text=As%20melhores%20solu%C3%A7%C3%B5es%20de%20TI%20para%20si!",
                        }}
                        target="_blank"
                        className="w-9 mx-1"
                    >
                        <WhatsAppIcon className="w-full h-full" />
                    </Link>
                </div>
            </div>

            <div className="col-start-1 col-span-full flex-col flex items-center md:justify-between md:flex-row mt-8">
                <div className="links flex font-semibold">
                    <Link to="/">HOME</Link>
                    <Link to="/trabalhos" className="ml-4">
                        TRABALHOS
                    </Link>
                    <Link to="/sobremim" className="ml-4">
                        SOBRE MIM
                    </Link>
                </div>

                <p>andersonvitalena@hotmail.com</p>
            </div>
        </footer>
    );
}
