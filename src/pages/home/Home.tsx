import React from "react";
import AutomaticCarousel from "../../components/AutomaticCarousel";
import Bobble from "../../components/Bobble";
import Banner from "../../components/main/Banner";
import H1 from "../../components/H1";
import P from "../../components/P";
import PrimaryButton from "../../components/PrimaryButton";
import { Link } from "react-router-dom";
import SecondaryButton from "../../components/SecondaryButton";
import { Emphasis as E } from "../../components/Emphasis";
import ServicesIllustration from "../../assets/icons/ServicesIllustration";
import Section from "../../components/Section";
import SectionTitle from "../../components/SectionTitle";
import ServiceSlider from "../../components/ServiceSlider";
import WebsiteIcon from "../../assets/icons/WebsiteIcon";
import AndroidIcon from "../../assets/icons/AndroidIcon";
import DesktopIcon from "../../assets/icons/DesktopIcon";
import ScriptIcon from "../../assets/icons/ScriptIcon";
import Tab from "../../components/Tab";
import WorkCard from "../../components/WorkCard";
import SeeMoreButton from "../../components/SeeMoreButton";
import Hability from "../../components/Hability";
import HabilitiesIllustration from "../../assets/icons/HabilitiesIllustration";
import ReactIcon from "../../assets/icons/ReactIcon";
import NodeJSIcon from "../../assets/icons/NodeJSIcon";
import PythonIcon from "../../assets/icons/PythonIcon";

const projectoemmente = require("../../assets/images/projectoemmente.png");
const mycarimage = require("../../assets/images/mycarimage.jpg");
const mycarmobileimage = require("../../assets/images/mycarmobileimage.jpg");
const hotelimage = require("../../assets/images/hotelimage.jpg");
const myportfolioimage = require("../../assets/images/myportfolioimage.jpg");
const musicappimage = require("../../assets/images/musicappimage.jpg");
const mwangoplayerimage = require("../../assets/images/mwangoplayerimage.jpg");
const decoraimage = require("../../assets/images/decoraimage.jpg");
const alimentaimage = require("../../assets/images/alimentaimage.jpg");

type HomeProps = {
    openModal: () => void;
};

export default function Home({ openModal }: HomeProps) {
    const [tabSelectedIndex, setTabSelectedIndex] = React.useState<number>(0);

    return (
        <>
            <div className="banner px-6 md:px-16 lg:px-36 mygrid h-[100vh] lg:h-[90vh] justify-center items-center relative overflow-hidden">
                <Bobble initial={{ top: 200, left: 200 }} bobbleSize={70} />
                <Bobble
                    initial={{ top: 40, left: window.innerWidth - 400 }}
                    bobbleSize={90}
                />
                <Banner className="col-start-1 col-end-13 md:col-start-3 lg:col-start-3 md:col-end-11 lg:col-end-11">
                    <H1>
                        Temos A <E>Solução</E> Para Os Seus <E>Problemas!</E>
                    </H1>
                    <P>
                        Olá! Eu sou o Anderson Coimbra e vou ajudar você a
                        resolver os seus problemas e a crescer o seu negócio
                        criando as melhores soluções de TI!
                    </P>
                    <div className="flex mt-2">
                        <PrimaryButton
                            className="px-6 py-2"
                            onClick={openModal}
                        >
                            SOLICITAR
                        </PrimaryButton>
                        <Link to="/trabalhos" className="ml-8">
                            <SecondaryButton className="px-6 py-2">
                                MEUS TRABALHOS
                            </SecondaryButton>
                        </Link>
                    </div>
                </Banner>
            </div>
            <AutomaticCarousel
                images={[
                    mycarimage,
                    mycarmobileimage,
                    hotelimage,
                    myportfolioimage,
                    musicappimage,
                    decoraimage,
                    mwangoplayerimage,
                    alimentaimage,
                ]}
            />

            <Section className="mx-6 md:16 lg:mx-36 my-28 mt-10 mygrid relative overflow-hidden">
                <Bobble initial={{ top: 200, left: 200 }} bobbleSize={70} />
                <Bobble
                    initial={{ top: 40, left: window.innerWidth - 400 }}
                    bobbleSize={90}
                />
                <div className="col-start-1 col-end-13 md:col-end-7 w-full h-[30rem]">
                    <ServicesIllustration className="w-full h-full" />
                </div>
                <div className="col-start-1 md:col-start-7 col-span-full">
                    <SectionTitle preTitle="SERVIÇOS">
                        As Melhores <E>Soluções</E> De <E>TI</E> Para Si
                        <E>!</E>
                    </SectionTitle>
                    <div className="services mt-4">
                        <ServiceSlider
                            serviceData={[
                                {
                                    Icon: (
                                        <WebsiteIcon className="w-full h-full" />
                                    ),
                                    title: "DESENVOLVIMENTO DE WEBSITES",
                                    text: "Do Lorem dolor dolore amet dolore eiusmod in dolor quis aliqua. Anim nisi aliqua enim aliquip tempor. Lorem do consequat tempor culpa mollit est.",
                                },
                                {
                                    Icon: (
                                        <AndroidIcon className="w-full h-full" />
                                    ),
                                    title: "DESENVOLVIMENTO DE APLICATIVOS ANDROID",
                                    text: "Do Lorem dolor dolore amet dolore eiusmod in dolor quis aliqua. Anim nisi aliqua enim aliquip tempor. Lorem do consequat tempor culpa mollit est.",
                                },
                                {
                                    Icon: (
                                        <DesktopIcon className="w-full h-full" />
                                    ),
                                    title: "DESENVOLVIMENTO DE APLICATIVOS DESKTOP",
                                    text: "Adipisicing commodo anim exercitation fugiat nulla deserunt. In laboris laboris anim culpa dolor pariatur aliquip.",
                                },
                                {
                                    Icon: (
                                        <ScriptIcon className="w-full h-full" />
                                    ),
                                    title: "DESENVOLVIMENTO DE SCRIPTS DE AUTOMAÇÃO",
                                    text: "Laborum velit ex ex minim quis consequat commodo mollit adipisicing ad. Non laborum enim culpa est ut et fugiat anim minim eiusmod minim nulla ut. Consectetur enim sunt Lorem adipisicing deserunt velit.",
                                },
                            ]}
                        />
                    </div>
                </div>
            </Section>

            <Section className="px-6 md:px-16 lg:px-36 py-12 my-28 mygrid bg-secondary-2 relative">
                <div className="col-start-1 col-end-13 md:col-end-5 relative z-2">
                    <SectionTitle preTitle="TRABALHOS">
                        Veja Os Meus Últimos <E>Trabalhos.</E>
                    </SectionTitle>
                    <Tab
                        className="h-56 overflow-y-auto"
                        items={[
                            "WEBSITES",
                            "APLICATIVOS ANDROID",
                            "APLICATIVOS DESKTOP",
                            "SCRIPT DE AUTOMAÇÃO",
                        ]}
                        selectedIndex={tabSelectedIndex}
                        icons={[
                            <WebsiteIcon className="w-full h-full" />,
                            <AndroidIcon className="w-full h-full" />,
                            <DesktopIcon className="w-full h-full" />,
                            <ScriptIcon className="w-full h-full" />,
                        ]}
                        setSelectedIndex={setTabSelectedIndex}
                    />
                </div>

                <div className="works col-start-1 md:col-start-5 col-span-full md:grid md:grid-cols-2 md:gap-x-3 relative z-2">
                    <WorkCard
                        image={mycarimage}
                        name="LOREM IPSUM"
                        text="Labore cillum proident duis qui incididunt occaecat eiusmod reprehenderit labore deserunt aliqua. Laborum culpa et proident magna sint commodo est aliquip aliqua laboris ad nulla mollit. "
                        link=""
                        mobileLink=""
                    />
                    <WorkCard
                        image={hotelimage}
                        name="LOREM IPSUM"
                        text="Pariatur cupidatat mollit nulla ea exercitation sit ad est in consectetur voluptate. Duis veniam amet velit do occaecat tempor ea dolor occaecat sunt consectetur dolore ad id. Amet duis consequat dolore culpa. Ad in officia non commodo sit est exercitation sit officia laboris exercitation laboris sint quis"
                        link=""
                        mobileLink=""
                        className="md:hidden lg:block"
                    />
                </div>
                <SeeMoreButton
                    to="/trabalhos"
                    className="col-span-full justify-self-end relative z-2"
                >
                    VER MAIS TRABALHOS
                </SeeMoreButton>
            </Section>

            <Section className="px-6 md:px-16 lg:px-36 mygrid mt-28 relative overflow-hidden">
                <Bobble initial={{ top: 200, left: 200 }} bobbleSize={70} />
                <Bobble
                    initial={{ top: 40, left: window.innerWidth - 400 }}
                    bobbleSize={90}
                />
                <div className="col-start-1 col-end-12 md:col-end-7 w-full h-[30rem]">
                    <HabilitiesIllustration className="w-full h-full" />
                </div>
                <div className="col-start-1 md:col-start-7 col-span-full">
                    <SectionTitle
                        preTitle="CONHECIMENTOS"
                        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an."
                    >
                        Confira As Minhas <E>Habilidades.</E>
                    </SectionTitle>
                    <div className="md:grid md:grid-cols-2 md:gap-x-4 mt-4">
                        <Hability
                            name="REACTJS"
                            icon={<ReactIcon className="w-full h-full" />}
                            text="asdsadasdas"
                            percents={80}
                            className="my-5"
                        />
                        <Hability
                            name="REACT NATIVE"
                            icon={<ReactIcon className="w-full h-full" />}
                            text="asdsadasdas"
                            percents={80}
                            className="my-5"
                        />
                        <Hability
                            name="NODEJS"
                            icon={<NodeJSIcon className="w-full h-full" />}
                            text="asdadsa"
                            percents={95}
                            className="my-5"
                        />
                        <Hability
                            name="PYTHON"
                            icon={<PythonIcon className="w-full h-full" />}
                            text="asdasdas"
                            percents={95}
                            className="my-5"
                        />
                        <Hability
                            name="PYTHON"
                            icon={<PythonIcon className="w-full h-full" />}
                            text="asdasdas"
                            percents={60}
                            className="my-5"
                        />
                        <Hability
                            name="PYTHON"
                            icon={<PythonIcon className="w-full h-full" />}
                            text="asdasdas"
                            percents={70}
                            className="my-5"
                        />
                    </div>
                </div>
                <SeeMoreButton
                    to="/sobremim"
                    className="col-span-full justify-self-end"
                >
                    VER MAIS SOBRE MIM
                </SeeMoreButton>
            </Section>

            <Section className="px-6 md:px-16 lg:px-36 mygrid mt-28 items-center relative overflow-hidden">
                <Bobble initial={{ top: 200, left: 200 }} bobbleSize={70} />
                <Bobble
                    initial={{ top: 40, left: window.innerWidth - 400 }}
                    bobbleSize={90}
                />
                <div className="col-start-1 col-end-13 md:col-end-7">
                    <img
                        src={projectoemmente}
                        alt=""
                        className="w-9/12 m-auto"
                    />
                </div>

                <div className="col-start-1 md:col-start-7 col-span-full">
                    <SectionTitle text="Tem alguma ideia de aplicativo ou sistema em mente? Deixe-me ajudá-lo a tirar da sua mente e transformar em realidade!">
                        Tem Algum <E>Projecto</E> Em Mente? Não Hesite Em Me{" "}
                        <E>Contactar!</E>
                    </SectionTitle>
                    <PrimaryButton
                        className="px-6 py-2 mt-2"
                        onClick={openModal}
                    >
                        FALE COMIGO
                    </PrimaryButton>
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
