import React from "react";
import { Link } from "react-router-dom";
import Bobble from "../../components/Bobble";
import { Emphasis as E } from "../../components/Emphasis";
import H1 from "../../components/H1";
import Banner from "../../components/main/Banner";
import P from "../../components/P";
import SeeMoreButton from "../../components/SeeMoreButton";
import { withTalkModal } from "../../hocs/withTalkModal";
import withTitleAndContent from "../../hocs/withTitleAndContent";

type Error404Props = {
    openModal: () => void;
};

function Error404({ openModal }: Error404Props) {
    return (
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
                    ERRO <E>404</E>
                </H1>
                <P>Esta página está indisponível!</P>
                <div className="flex mt-2">
                    <Link to="/trabalhos" className="ml-8">
                        <SeeMoreButton className="px-6 py-2" to="/">
                            Voltar Para a Home
                        </SeeMoreButton>
                    </Link>
                </div>
            </Banner>
        </div>
    );
}

export default withTitleAndContent(
    withTalkModal(Error404),
    "Página não encontrada - Anderson Coimbra Soft",
    "Página não encontrada - Anderson Coimbra Soft"
);
