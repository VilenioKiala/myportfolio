import React from "react";
import AfterEffectsIcon from "../../assets/icons/AfterEffectsIcon";
import CSSIcon from "../../assets/icons/CSSIcon";
import FigmaIcon from "../../assets/icons/FigmaIcon";
import HTMLIcon from "../../assets/icons/HTMLIcon";
import IllustratorIcon from "../../assets/icons/IllustratorIcon";
import NodeJSIcon from "../../assets/icons/NodeJSIcon";
import PhotoshopIcon from "../../assets/icons/PhotoshopIcon";
import PythonIcon from "../../assets/icons/PythonIcon";
import ReactIcon from "../../assets/icons/ReactIcon";
import TypescriptIcon from "../../assets/icons/TypescriptIcon";
import Bobble from "../../components/Bobble";
import { Emphasis as E } from "../../components/Emphasis";
import H1 from "../../components/H1";
import Hability from "../../components/Hability";
import Banner from "../../components/main/Banner";
import P from "../../components/P";
import PrimaryButton from "../../components/PrimaryButton";
import Section from "../../components/Section";
import SectionTitle from "../../components/SectionTitle";
import { withTalkModal } from "../../hocs/withTalkModal";
import withTitleAndContent from "../../hocs/withTitleAndContent";

const myphoto = require("../../assets/images/myphoto.jpg");

type SobreMimProps = {
    openModal: () => void;
};

function SobreMim({ openModal }: SobreMimProps) {
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
                        Olá! Eu sou o Vilénio Anderson Coimbra Kiala, tenho 20
                        anos e sou Angolano, propriamente de Luanda. Estudo
                        programação à mais de 3 anos e durante esse tempo venho
                        desenvolvendo imensos projectos relacionados a
                        desenvolvimento de websites, desenvolvimento de
                        aplicativos para dispositivos móveis, desenvolvolvimento
                        de aplicativos para computadores e scripts de automação.
                        <br />
                        <br />
                        Venho estudando cada vez mais, afim de aperfeiçoar os
                        meus conhecimentos nesta e em outras áreas. Gosto muito
                        de aprender e compartilhar experiências e trabalhar
                        junto com os outros desenvolvedores em projectos
                        colaborativos.
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
                            percents={93}
                            name="React"
                            text="Websites, Aplicações WEB, SPA"
                        />
                        <Hability
                            icon={<ReactIcon />}
                            percents={86}
                            name="React Native"
                            text="Aplicativos Mobile"
                        />
                        <Hability
                            icon={<NodeJSIcon />}
                            percents={80}
                            name="NODEJS"
                            text="Websites, APIs"
                        />
                        <Hability
                            icon={<PythonIcon />}
                            percents={80}
                            name="PYTHON"
                            text="Websites, APIs, Aplicativos Desktop, Scripts de Automação"
                        />
                        <Hability
                            icon={<HTMLIcon />}
                            percents={95}
                            name="HTML"
                            text="Websites Estáticos"
                        />
                        <Hability
                            icon={<CSSIcon />}
                            percents={97}
                            name="CSS"
                            text="Estilização de Websites"
                        />
                        <Hability
                            icon={<FigmaIcon />}
                            percents={80}
                            name="Figma"
                            text="Interface de Usuário"
                        />
                        <Hability
                            icon={<TypescriptIcon />}
                            percents={88}
                            name="Typescript"
                            text="Javascript com Tipagem"
                        />
                        <Hability
                            icon={<PhotoshopIcon />}
                            percents={80}
                            name="Adobe Photoshop"
                            text="Design Gráfico"
                        />
                        <Hability
                            icon={<IllustratorIcon />}
                            percents={70}
                            name="Adobe Illustrator"
                            text="Design Gráfico, Logotipos"
                        />
                        <Hability
                            icon={<AfterEffectsIcon />}
                            percents={75}
                            name="Adobe After Effects"
                            text="Edição de vídeo"
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

export default withTitleAndContent(
    withTalkModal(SobreMim),
    "Sobre Mim",
    "Saiba mais sobre Vilénio Anderson Coimbra Kiala - Anderson Coimbra Soft"
);
