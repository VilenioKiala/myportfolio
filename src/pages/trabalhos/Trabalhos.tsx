import React, { Dispatch, SetStateAction } from "react";
import Bobble from "../../components/Bobble";
import { Emphasis as E } from "../../components/Emphasis";
import H1 from "../../components/H1";
import Banner from "../../components/main/Banner";
import P from "../../components/P";
import Section from "../../components/Section";
import SectionTitle from "../../components/SectionTitle";
import WorkCard from "../../components/WorkCard";
import { withImageDisplayer } from "../../hocs/withImageDisplayer";
import withTitleAndContent from "../../hocs/withTitleAndContent";

const mycarimage = require("../../assets/images/mycarimage.jpg");
const myportfolioimage = require("../../assets/images/myportfolioimage.jpg");
const decoraimage = require("../../assets/images/decoraimage.jpg");
const alimentaimage = require("../../assets/images/alimentaimage.jpg");
const mwangoplayerimage = require("../../assets/images/mwangoplayerimage.jpg");
const musicappimage = require("../../assets/images/musicappimage.jpg");
const mycarmobileimage = require("../../assets/images/mycarmobileimage.jpg");
const profagilimage = require("../../assets/images/profagilimage.png");

type TrabalhosProps = {
    openImageDisplayer: () => void;
    setImageOnDisplayer: Dispatch<SetStateAction<string>>;
};

function Trabalhos({
    openImageDisplayer,
    setImageOnDisplayer,
}: TrabalhosProps) {
    return (
        <>
            <div className="banner px-6 md:px-16 lg:px-36 mygrid h-[100vh] lg:h-[90vh] justify-center items-center relative overflow-hidden">
                <Bobble
                    initial={{ top: 70, left: 10 }}
                    end={{ top: 30, left: 30 }}
                    bobbleSize={70}
                />
                <Bobble
                    initial={{ top: 50, left: 90 }}
                    end={{ top: 70, left: 70 }}
                    bobbleSize={90}
                />
                <Banner className="col-start-1 col-end-13 md:col-start-3 lg:col-start-3 md:col-end-11 lg:col-end-11 relative z-20">
                    <H1>
                        Confira Os Meus <E>Trabalhos.</E>
                    </H1>
                    <P>
                        Sempre melhorando, com certeza que seu projecto ficará
                        melhor que estes!
                    </P>
                </Banner>
            </div>
            <Section className="px-6 md:px-16 lg:px-36 mygrid relative overflow-hidden">
                <Bobble
                    initial={{ top: 20, left: 20 }}
                    end={{ top: 40, left: 30 }}
                    bobbleSize={70}
                />
                <Bobble
                    initial={{ top: 76, left: 70 }}
                    end={{ top: 50, left: 60 }}
                    bobbleSize={90}
                />
                <div className="col-start-1 col-end-13 md:col-start-2 md:col-end-12 lg:col-start-4 lg:col-end-10 text-center relative z-20">
                    <SectionTitle preTitle="WEBSITES">
                        Sua Empresa Ganhará Mais <E>Autoridades</E> Com{" "}
                        <E>Websites</E> Assim!
                    </SectionTitle>
                </div>
                <div className="col-start-1 col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 relative z-20">
                    <WorkCard
                        image={mycarimage}
                        name="My Car App"
                        text="Website de uma empresa de Aluguel de carros."
                        openImageDisplayer={openImageDisplayer}
                        setImageOnDisplayer={setImageOnDisplayer}
                        link="https://www.figma.com/proto/4cMIzxG7MyUVSHTMnw6BIj/Untitled?node-id=4%3A2&scaling=scale-down-width&page-id=0%3A1"
                    />
                    <WorkCard
                        image={myportfolioimage}
                        name="Meu PortFólio"
                        text="O meu portfólio também foi desenvolvido por mim😊😅"
                        openImageDisplayer={openImageDisplayer}
                        setImageOnDisplayer={setImageOnDisplayer}
                        link="https://www.figma.com/proto/Rf34xFKLTHhd8NlQ40pOhd/Minha-marca?node-id=139%3A44&scaling=scale-down-width&page-id=139%3A9&starting-point-node-id=139%3A44"
                    />
                    <WorkCard
                        image={decoraimage}
                        name="Decora"
                        text="Website de uma empresa de venda de mobílias."
                        openImageDisplayer={openImageDisplayer}
                        setImageOnDisplayer={setImageOnDisplayer}
                        link="https://www.figma.com/proto/YPbDcB7FVy6wlhPykD1e0e/Untitled?node-id=2%3A5&scaling=scale-down-width&page-id=0%3A1"
                    />
                    <WorkCard
                        image={alimentaimage}
                        name="Alimenta"
                        text="Restaurante ONLINE!"
                        openImageDisplayer={openImageDisplayer}
                        setImageOnDisplayer={setImageOnDisplayer}
                        link="https://www.figma.com/proto/WQJF6qj7CgTAyAGjDR6QBD/Untitled?node-id=2%3A2&scaling=scale-down-width&page-id=0%3A1"
                    />
                </div>
            </Section>

            <Section className="px-6 md:px-16 lg:px-36 mt-32 mygrid relative overflow-hidden">
                <Bobble
                    initial={{ top: 70, left: 20 }}
                    end={{ top: 50, left: 30 }}
                    bobbleSize={70}
                />
                <Bobble
                    initial={{ top: 20, left: 90 }}
                    end={{ top: 40, left: 40 }}
                    bobbleSize={90}
                />
                <div className="col-start-1 col-end-13 md:col-start-2 md:col-end-12 lg:col-start-4 lg:col-end-10 text-center relative z-20">
                    <SectionTitle preTitle="APLICATIVOS ANDROID">
                        Aplicativo Android À <E>Medida</E> Na{" "}
                        <E>Ponta Dos Dedos!</E>
                    </SectionTitle>
                </div>
                <div className="col-start-1 col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 relative z-20">
                    <WorkCard
                        image={mwangoplayerimage}
                        name="Mwango Player"
                        text="Um pequeno aplicativo de reprodução de músicas"
                        openImageDisplayer={openImageDisplayer}
                        setImageOnDisplayer={setImageOnDisplayer}
                        link="https://www.figma.com/proto/uVMtTzl7elfe8OisAAgN90/Untitled?node-id=3%3A3&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A3"
                    />
                    <WorkCard
                        image={musicappimage}
                        name="Musicapp"
                        text="Uma mini plataforma de streaming de músicas"
                        openImageDisplayer={openImageDisplayer}
                        setImageOnDisplayer={setImageOnDisplayer}
                        link="https://www.figma.com/proto/d1v5SYZaKAgh1Im0bXsyTP/Untitled?node-id=105%3A22&scaling=scale-down-width&page-id=93%3A2&starting-point-node-id=105%3A22"
                    />
                    <WorkCard
                        image={mycarmobileimage}
                        name="MyCar"
                        text="Aplicativo de aluguel de carros."
                        openImageDisplayer={openImageDisplayer}
                        setImageOnDisplayer={setImageOnDisplayer}
                        link="https://www.figma.com/proto/4cMIzxG7MyUVSHTMnw6BIj/Untitled?node-id=121%3A4&scaling=scale-down&page-id=121%3A2"
                    />
                </div>
            </Section>
            <Section className="px-6 md:px-16 lg:px-36 mt-32 mb-48 mygrid relative overflow-hidden">
                <Bobble
                    initial={{ top: 80, left: 90 }}
                    end={{ top: 20, left: 60 }}
                    bobbleSize={70}
                />
                <Bobble
                    initial={{ top: 20, left: 10 }}
                    end={{ top: 40, left: 30 }}
                    bobbleSize={90}
                />
                <div className="col-start-1 col-end-13 md:col-start-2 md:col-end-12 lg:col-start-4 lg:col-end-10 text-center relative z-20">
                    <SectionTitle preTitle="APLICATIVOS DESKTOP">
                        Os Melhores Softwares Para Aumentar A{" "}
                        <E>Produtividade</E> Da Sua <E>Empresa</E>
                    </SectionTitle>
                </div>
                <div className="col-start-1 col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 relative z-20">
                    <WorkCard
                        image={profagilimage}
                        name="Profágil"
                        text="Software direcionado para os professores de mais de 1 escola, permite fazer a gestão de todos os alunos no seu todo, tal como suas avaliações contínuas. Permite calcular muito mais rápido a média das avaliações contínuas e a média final dos alunos."
                        openImageDisplayer={openImageDisplayer}
                        setImageOnDisplayer={setImageOnDisplayer}
                    />
                </div>
            </Section>
        </>
    );
}

export default withTitleAndContent(
    withImageDisplayer(Trabalhos),
    "Meus Trabalhos",
    "Trabalhos Anderson Coimbra Soft"
);
