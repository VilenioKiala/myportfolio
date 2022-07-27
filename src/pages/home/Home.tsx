import React, { Dispatch, SetStateAction } from "react";
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
import { withTalkModal } from "../../hocs/withTalkModal";
import HTMLIcon from "../../assets/icons/HTMLIcon";
import CSSIcon from "../../assets/icons/CSSIcon";
import { withImageDisplayer } from "../../hocs/withImageDisplayer";
import withTitleAndContent from "../../hocs/withTitleAndContent";

const projectoemmente = require("../../assets/images/projectoemmente.png");
const mycarimage = require("../../assets/images/mycarimage.jpg");
const mycarmobileimage = require("../../assets/images/mycarmobileimage.jpg");
const hotelimage = require("../../assets/images/hotelimage.jpg");
const myportfolioimage = require("../../assets/images/myportfolioimage.jpg");
const musicappimage = require("../../assets/images/musicappimage.jpg");
const mwangoplayerimage = require("../../assets/images/mwangoplayerimage.jpg");
const decoraimage = require("../../assets/images/decoraimage.jpg");
const alimentaimage = require("../../assets/images/alimentaimage.jpg");
const profagilimage = require("../../assets/images/profagilimage.png");

type HomeProps = {
    openModal: () => void;
    openImageDisplayer: () => void;
    setImageOnDisplayer: Dispatch<SetStateAction<string>>;
};

function Home({
    openModal,
    openImageDisplayer,
    setImageOnDisplayer,
}: HomeProps) {
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

            <Section className="px-6 md:px-16 lg:px-36 my-28 mygrid relative overflow-hidden">
                <Bobble initial={{ top: 200, left: 200 }} bobbleSize={70} />
                <Bobble
                    initial={{ top: 40, left: window.innerWidth - 200 }}
                    bobbleSize={90}
                />
                <div className="col-start-1 col-end-13 md:col-end-7 w-full h-[30rem]">
                    <ServicesIllustration />
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
                                    Icon: <WebsiteIcon />,
                                    title: "DESENVOLVIMENTO DE WEBSITES",
                                    text: "Criarei para si um Website para a sua empresa ou negócio. Uma forma muito mais fácil e produtiva de capturar clientes. GANHE AUTORIDADE NO MERCADO!",
                                },
                                {
                                    Icon: <AndroidIcon />,
                                    title: "DESENVOLVIMENTO DE APLICATIVOS ANDROID",
                                    text: "Tem ideia de um aplicativo android? Fale comigo que eu transformarei a sua ideia em REALIDADE!",
                                },
                                {
                                    Icon: <DesktopIcon />,
                                    title: "DESENVOLVIMENTO DE APLICATIVOS DESKTOP",
                                    text: "Aumente a produtividade de sua empresa tendo um aplicativo desktop que realize tarefas de uma forma mais rápida e com poucos cliques.",
                                },
                                {
                                    Icon: <ScriptIcon />,
                                    title: "DESENVOLVIMENTO DE SCRIPTS DE AUTOMAÇÃO",
                                    text: "Gasta muito tempo e esforço para realizar determinadas tarefas no computador? Sabia que essas tarefas podem ser feitas com poucos ou nenhum clique? Fale comigo e eu crio um script para fazer essas tarefas por você!",
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
                        ]}
                        selectedIndex={tabSelectedIndex}
                        icons={[
                            <WebsiteIcon />,
                            <AndroidIcon />,
                            <DesktopIcon />,
                        ]}
                        setSelectedIndex={setTabSelectedIndex}
                    />
                </div>

                <div className="works col-start-1 md:col-start-5 col-span-full md:grid md:grid-cols-2 md:gap-x-3 relative z-2">
                    {tabSelectedIndex === 0 && (
                        <>
                            <WorkCard
                                image={mycarimage}
                                name="My Car App"
                                text="Website de uma empresa de Aluguel de carros."
                                openImageDisplayer={openImageDisplayer}
                                setImageOnDisplayer={setImageOnDisplayer}
                            />
                            <WorkCard
                                image={decoraimage}
                                name="Decora"
                                text="Website de uma empresa de venda de mobílias."
                                openImageDisplayer={openImageDisplayer}
                                setImageOnDisplayer={setImageOnDisplayer}
                                className="md:hidden lg:block"
                            />
                        </>
                    )}

                    {tabSelectedIndex === 1 && (
                        <>
                            <WorkCard
                                image={musicappimage}
                                name="Musicapp"
                                text="Uma mini plataforma de streaming de músicas"
                                openImageDisplayer={openImageDisplayer}
                                setImageOnDisplayer={setImageOnDisplayer}
                            />
                            <WorkCard
                                image={mycarmobileimage}
                                name="MyCar"
                                text="Aplicativo de aluguel de carros."
                                openImageDisplayer={openImageDisplayer}
                                setImageOnDisplayer={setImageOnDisplayer}
                                className="md:hidden lg:block"
                            />
                        </>
                    )}

                    {tabSelectedIndex === 2 && (
                        <>
                            <WorkCard
                                image={profagilimage}
                                name="Profágil"
                                text="Software direcionado para os professores de mais de 1 escola, permite fazer a gestão de todos os alunos no seu todo, tal como suas avaliações contínuas. Permite calcular muito mais rápido a média das avaliações contínuas e a média final dos alunos."
                                openImageDisplayer={openImageDisplayer}
                                setImageOnDisplayer={setImageOnDisplayer}
                            />
                        </>
                    )}
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
                    <HabilitiesIllustration />
                </div>
                <div className="col-start-1 md:col-start-7 col-span-full">
                    <SectionTitle
                        preTitle="CONHECIMENTOS"
                        text="Eu tenho um grande amor em aprender coisas e a cada dia que passa vou incrementando meu conhecimentos em programação e não só. Aqui estão os meus conhecimentos:"
                    >
                        Confira As Minhas <E>Habilidades.</E>
                    </SectionTitle>
                    <div className="md:grid md:grid-cols-2 md:gap-x-4 mt-4">
                        <Hability
                            name="REACTJS"
                            icon={<ReactIcon />}
                            text="Websites, Aplicações WEB, SPA..."
                            percents={93}
                            className="my-5"
                        />
                        <Hability
                            name="REACT NATIVE"
                            icon={<ReactIcon />}
                            text="Aplicativos Mobile"
                            percents={86}
                            className="my-5"
                        />
                        <Hability
                            name="NODEJS"
                            icon={<NodeJSIcon />}
                            text="Websites, APIs..."
                            percents={80}
                            className="my-5"
                        />
                        <Hability
                            name="PYTHON"
                            icon={<PythonIcon />}
                            text="Websites, APIs, Aplicativos Desktop, Scripts de Automação..."
                            percents={80}
                            className="my-5"
                        />
                        <Hability
                            name="HTML"
                            icon={<HTMLIcon />}
                            text="Websites Estáticos..."
                            percents={95}
                            className="my-5"
                        />
                        <Hability
                            name="CSS"
                            icon={<CSSIcon />}
                            text="Estilização de Websites"
                            percents={97}
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

export default withTitleAndContent(
    withTalkModal(withImageDisplayer(Home)),
    "Anderson Coimbra Soft, As Melhores Soluções de TI Para VOCÊ",
    "Anderson Coimbra Soft, As Melhores Soluções de TI Para VOCÊ"
);
