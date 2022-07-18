import React from "react";
import Bobble from "../../components/Bobble";
import { Emphasis as E } from "../../components/Emphasis";
import H1 from "../../components/H1";
import Banner from "../../components/main/Banner";
import P from "../../components/P";
import Section from "../../components/Section";
import SectionTitle from "../../components/SectionTitle";
import WorkCard from "../../components/WorkCard";

const mycarimage = require("../../assets/images/mycarimage.jpg");

export default function Trabalhos() {
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
                        Confira Os Meus <E>Trabalhos.</E>
                    </H1>
                    <P>
                        Sempre melhorando, com certeza que seu projecto ficará
                        melhor que estes!
                    </P>
                </Banner>
            </div>
            <Section className="px-6 md:px-16 lg:px-36 mygrid relative overflow-hidden">
                <Bobble initial={{ top: 200, left: 200 }} bobbleSize={70} />
                <Bobble
                    initial={{ top: 40, left: window.innerWidth - 400 }}
                    bobbleSize={90}
                />
                <div className="col-start-1 col-end-13 md:col-start-2 md:col-end-12 lg:col-start-4 lg:col-end-10 text-center">
                    <SectionTitle preTitle="WEBSITES">
                        Sua Empresa Ganhará Mais <E>Autoridades</E> Com{" "}
                        <E>Websites</E> Assim!
                    </SectionTitle>
                </div>
                <div className="col-start-1 col-span-full grid grid-cols-3 gap-10">
                    <WorkCard
                        image={mycarimage}
                        name="LOREM IPSUM"
                        text="Labore cillum proident duis qui incididunt occaecat eiusmod reprehenderit labore deserunt aliqua. Laborum culpa et proident magna sint commodo est aliquip aliqua laboris ad nulla mollit. "
                        link=""
                        mobileLink=""
                    />
                    <WorkCard
                        image={mycarimage}
                        name="LOREM IPSUM"
                        text="Labore cillum proident duis qui incididunt occaecat eiusmod reprehenderit labore deserunt aliqua. Laborum culpa et proident magna sint commodo est aliquip aliqua laboris ad nulla mollit. "
                        link=""
                        mobileLink=""
                    />
                    <WorkCard
                        image={mycarimage}
                        name="LOREM IPSUM"
                        text="Labore cillum proident duis qui incididunt occaecat eiusmod reprehenderit labore deserunt aliqua. Laborum culpa et proident magna sint commodo est aliquip aliqua laboris ad nulla mollit. "
                        link=""
                        mobileLink=""
                    />
                    <WorkCard
                        image={mycarimage}
                        name="LOREM IPSUM"
                        text="Labore cillum proident duis qui incididunt occaecat eiusmod reprehenderit labore deserunt aliqua. Laborum culpa et proident magna sint commodo est aliquip aliqua laboris ad nulla mollit. "
                        link=""
                        mobileLink=""
                    />
                    <WorkCard
                        image={mycarimage}
                        name="LOREM IPSUM"
                        text="Labore cillum proident duis qui incididunt occaecat eiusmod reprehenderit labore deserunt aliqua. Laborum culpa et proident magna sint commodo est aliquip aliqua laboris ad nulla mollit. "
                        link=""
                        mobileLink=""
                    />
                </div>
            </Section>
            <Section className="px-6 md:px-16 lg:px-36 mt-32 mygrid relative overflow-hidden">
                <Bobble initial={{ top: 200, left: 200 }} bobbleSize={70} />
                <Bobble
                    initial={{ top: 40, left: window.innerWidth - 400 }}
                    bobbleSize={90}
                />
                <div className="col-start-1 col-end-13 md:col-start-2 md:col-end-12 lg:col-start-4 lg:col-end-10 text-center">
                    <SectionTitle preTitle="APLICATIVOS ANDROID">
                        Sua Empresa Ganhará Mais <E>Autoridades</E> Com{" "}
                        <E>Websites</E> Assim!
                    </SectionTitle>
                </div>
                <div className="col-start-1 col-span-full grid grid-cols-3 gap-10">
                    <WorkCard
                        image={mycarimage}
                        name="LOREM IPSUM"
                        text="Labore cillum proident duis qui incididunt occaecat eiusmod reprehenderit labore deserunt aliqua. Laborum culpa et proident magna sint commodo est aliquip aliqua laboris ad nulla mollit. "
                        link=""
                        mobileLink=""
                    />
                    <WorkCard
                        image={mycarimage}
                        name="LOREM IPSUM"
                        text="Labore cillum proident duis qui incididunt occaecat eiusmod reprehenderit labore deserunt aliqua. Laborum culpa et proident magna sint commodo est aliquip aliqua laboris ad nulla mollit. "
                        link=""
                        mobileLink=""
                    />
                    <WorkCard
                        image={mycarimage}
                        name="LOREM IPSUM"
                        text="Labore cillum proident duis qui incididunt occaecat eiusmod reprehenderit labore deserunt aliqua. Laborum culpa et proident magna sint commodo est aliquip aliqua laboris ad nulla mollit. "
                        link=""
                        mobileLink=""
                    />
                    <WorkCard
                        image={mycarimage}
                        name="LOREM IPSUM"
                        text="Labore cillum proident duis qui incididunt occaecat eiusmod reprehenderit labore deserunt aliqua. Laborum culpa et proident magna sint commodo est aliquip aliqua laboris ad nulla mollit. "
                        link=""
                        mobileLink=""
                    />
                    <WorkCard
                        image={mycarimage}
                        name="LOREM IPSUM"
                        text="Labore cillum proident duis qui incididunt occaecat eiusmod reprehenderit labore deserunt aliqua. Laborum culpa et proident magna sint commodo est aliquip aliqua laboris ad nulla mollit. "
                        link=""
                        mobileLink=""
                    />
                </div>
            </Section>
            <Section className="px-6 md:px-16 lg:px-36 mt-32 mb-48 mygrid relative overflow-hidden">
                <Bobble initial={{ top: 200, left: 200 }} bobbleSize={70} />
                <Bobble
                    initial={{ top: 40, left: window.innerWidth - 400 }}
                    bobbleSize={90}
                />
                <div className="col-start-1 col-end-13 md:col-start-2 md:col-end-12 lg:col-start-4 lg:col-end-10 text-center">
                    <SectionTitle preTitle="APLICATIVOS ANDROID">
                        Sua Empresa Ganhará Mais <E>Autoridades</E> Com{" "}
                        <E>Websites</E> Assim!
                    </SectionTitle>
                </div>
                <div className="col-start-1 col-span-full grid grid-cols-3 gap-10">
                    <WorkCard
                        image={mycarimage}
                        name="LOREM IPSUM"
                        text="Labore cillum proident duis qui incididunt occaecat eiusmod reprehenderit labore deserunt aliqua. Laborum culpa et proident magna sint commodo est aliquip aliqua laboris ad nulla mollit. "
                        link=""
                        mobileLink=""
                    />
                    <WorkCard
                        image={mycarimage}
                        name="LOREM IPSUM"
                        text="Labore cillum proident duis qui incididunt occaecat eiusmod reprehenderit labore deserunt aliqua. Laborum culpa et proident magna sint commodo est aliquip aliqua laboris ad nulla mollit. "
                        link=""
                        mobileLink=""
                    />
                    <WorkCard
                        image={mycarimage}
                        name="LOREM IPSUM"
                        text="Labore cillum proident duis qui incididunt occaecat eiusmod reprehenderit labore deserunt aliqua. Laborum culpa et proident magna sint commodo est aliquip aliqua laboris ad nulla mollit. "
                        link=""
                        mobileLink=""
                    />
                    <WorkCard
                        image={mycarimage}
                        name="LOREM IPSUM"
                        text="Labore cillum proident duis qui incididunt occaecat eiusmod reprehenderit labore deserunt aliqua. Laborum culpa et proident magna sint commodo est aliquip aliqua laboris ad nulla mollit. "
                        link=""
                        mobileLink=""
                    />
                    <WorkCard
                        image={mycarimage}
                        name="LOREM IPSUM"
                        text="Labore cillum proident duis qui incididunt occaecat eiusmod reprehenderit labore deserunt aliqua. Laborum culpa et proident magna sint commodo est aliquip aliqua laboris ad nulla mollit. "
                        link=""
                        mobileLink=""
                    />
                </div>
            </Section>
        </>
    );
}
