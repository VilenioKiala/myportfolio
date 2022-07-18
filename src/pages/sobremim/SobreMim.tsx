import React from "react";
import ReactIcon from "../../assets/icons/ReactIcon";
import Bobble from "../../components/Bobble";
import { Emphasis as E } from "../../components/Emphasis";
import H1 from "../../components/H1";
import Hability from "../../components/Hability";
import Banner from "../../components/main/Banner";
import P from "../../components/P";
import PrimaryButton from "../../components/PrimaryButton";
import Section from "../../components/Section";
import SectionTitle from "../../components/SectionTitle";

const myphoto = require("../../assets/images/myphoto.jpg");

type SobreMimProps = {
    openModal: () => void;
};

export default function SobreMim({ openModal }: SobreMimProps) {
    return (
        <>
            <div className="banner px-6 md:px-16 lg:px-36 mygrid h-[100vh] lg:h-[90vh] justify-center items-center relative overflow-hidden">
                <Bobble initial={{ top: 200, left: 200 }} bobbleSize={70} />
                <Bobble
                    initial={{ top: 40, left: window.innerWidth - 400 }}
                    bobbleSize={90}
                />
                <Banner className="col-start-1 col-end-13 md:col-start-3 md:col-end-11 lg:col-start-3 lg:col-end-11">
                    <div
                        className="w-36 h-36 rounded-full bg-cover bg-center border-green-2 border-2"
                        style={{ backgroundImage: `url(${myphoto})` }}
                    ></div>
                    <H1>
                        Vilénio <E>Anderson</E> <E>Coimbra</E> Kiala
                    </H1>
                    <P>Desenvolvedor de Software</P>
                </Banner>
            </div>
            <Section className="px-6 md:px-16 lg:px-36 mb-48 mygrid relative overflow-hidden">
                <Bobble initial={{ top: 200, left: 200 }} bobbleSize={70} />
                <Bobble
                    initial={{ top: 40, left: window.innerWidth - 400 }}
                    bobbleSize={90}
                />
                <div className="col-start-1 col-end-13 md:col-start-2 md:col-end-12 lg:col-start-4 lg:col-end-10 text-center">
                    <SectionTitle preTitle="SOBRE MIM">
                        Quem Sou <E>Eu?</E>{" "}
                    </SectionTitle>
                </div>
                <div className="col-start-1 col-span-full">
                    <P>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                    </P>

                    <div className="grid grid-cols-1 text-center md:text-left md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        <div className="">
                            <P>Nome:</P>
                            <p className="font-semibold">
                                Vilénio Anderson Coimbra Kiala
                            </p>
                        </div>
                        <div className="">
                            <P>Idade:</P>
                            <p className="font-semibold">20</p>
                        </div>
                        <div className="">
                            <P>Email:</P>
                            <p className="font-semibold">
                                andersonvitalena@hotmail.com
                            </p>
                        </div>
                        <div className="">
                            <P>Contacto:</P>
                            <p className="font-semibold">+244 923 349 583</p>
                            <p className="font-semibold">+244 946 741 239</p>
                        </div>
                        <div className="">
                            <P>Localização:</P>
                            <p className="font-semibold">
                                Camama, Luanda, Angola
                            </p>
                        </div>
                    </div>
                </div>
            </Section>{" "}
            <Section className="px-6 md:px-16 lg:px-36 mb-48 mygrid relative overflow-hidden bg-secondary-2 py-12">
                <Bobble initial={{ top: 200, left: 200 }} bobbleSize={70} />
                <Bobble
                    initial={{ top: 40, left: window.innerWidth - 400 }}
                    bobbleSize={90}
                />
                <div className="col-start-1 col-end-13 md:col-start-2 md:col-end-12 lg:col-start-4 lg:col-end-10 text-center">
                    <SectionTitle preTitle="CONHECIMENTOS">
                        Todas As Minhas <E>Habilidades.</E>
                    </SectionTitle>
                </div>
                <div className="col-start-1 col-span-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Hability
                            icon={<ReactIcon />}
                            percents={80}
                            name="React"
                            text="asdasdasdasdas"
                        />
                        <Hability
                            icon={<ReactIcon />}
                            percents={80}
                            name="React"
                            text="asdasdasdasdas"
                        />
                        <Hability
                            icon={<ReactIcon />}
                            percents={80}
                            name="React"
                            text="asdasdasdasdas"
                        />
                        <Hability
                            icon={<ReactIcon />}
                            percents={80}
                            name="React"
                            text="asdasdasdasdas"
                        />
                        <Hability
                            icon={<ReactIcon />}
                            percents={80}
                            name="React"
                            text="asdasdasdasdas"
                        />
                        <Hability
                            icon={<ReactIcon />}
                            percents={80}
                            name="React"
                            text="asdasdasdasdas"
                        />
                        <Hability
                            icon={<ReactIcon />}
                            percents={80}
                            name="React"
                            text="asdasdasdasdas"
                        />
                        <Hability
                            icon={<ReactIcon />}
                            percents={80}
                            name="React"
                            text="asdasdasdasdas"
                        />
                        <Hability
                            icon={<ReactIcon />}
                            percents={80}
                            name="React"
                            text="asdasdasdasdas"
                        />
                        <Hability
                            icon={<ReactIcon />}
                            percents={80}
                            name="React"
                            text="asdasdasdasdas"
                        />
                    </div>
                </div>
            </Section>
            <Section className="mygrid mt-28 mb-16">
                <div className="col-start-1 col-end-13 md:col-start-2 md:col-end-12 lg:col-start-4 lg:col-end-10 text-center">
                    <SectionTitle>
                        Quer Testar? Faço Uma Amostra{" "}
                        <E>COMPLETAMENTE GRATUITA</E> <br />
                        Para Você!
                    </SectionTitle>
                    <PrimaryButton
                        className="px-6 py-2 mt-2"
                        onClick={openModal}
                    >
                        SOLICITAR AMOSTRA
                    </PrimaryButton>
                </div>
            </Section>
        </>
    );
}
