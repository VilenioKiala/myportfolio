import React from "react";
import "./App.css";
import InstragramIconStroke from "./assets/icons/InstragramIconStroke";
import MessengerIcon from "./assets/icons/MessengerIcon";
import MyLogo from "./assets/icons/MyLogo";
import WhatsAppIconStroke from "./assets/icons/WhatsAppIconStroke";
import EmailIconStroke from "./assets/icons/EmailIconStroke";
import { Emphasis } from "./components/Emphasis";
import Footer from "./components/main/Footer";
import Nav from "./components/main/Nav";
import Modal from "./components/Modal";
import P from "./components/P";
import SectionTitle from "./components/SectionTitle";
import { Link } from "react-router-dom";
import AppRouter from "./pages/AppRouter";

function App() {
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);

    const openModal = React.useCallback(() => {
        setModalOpen(true);
    }, []);

    return (
        <div className="App">
            <Nav className="px-6 md:px-16 lg:px-36" openModal={openModal} />
            <Modal open={modalOpen} setOpen={setModalOpen}>
                <div className="text-center">
                    <div className="w-40 m-auto">
                        <MyLogo className="w-full h-full" />
                    </div>
                    <SectionTitle>
                        Vamos <Emphasis>Bater Um Papo</Emphasis> Sobre As Suas{" "}
                        <Emphasis>Ideias?</Emphasis>
                    </SectionTitle>
                    <P>
                        Estou 100% disponível para servi-lo. Fique à vontade
                        para conversar através no meio mais conveniente para si!
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
                            <MessengerIcon className="w-full h-full" />
                        </Link>
                        <Link
                            to={{
                                pathname:
                                    "https://api.whatsapp.com/send?phone=244946741239&text=As%20melhores%20solu%C3%A7%C3%B5es%20de%20TI%20para%20si!",
                            }}
                            target="_blank"
                            className="w-12 mx-1"
                        >
                            <WhatsAppIconStroke className="w-full h-full" />
                        </Link>
                        <Link
                            to={{
                                pathname:
                                    "https://instagram.com/ander.coimbra/",
                            }}
                            target="_blank"
                            className="w-12 mx-1"
                        >
                            <InstragramIconStroke className="w-full h-full" />
                        </Link>
                        <Link
                            to={{
                                pathname:
                                    "mailto: andersonvitalena@hotmail.com",
                            }}
                            target="_blank"
                            className="w-10 mx-1"
                        >
                            <EmailIconStroke className="w-full h-full" />
                        </Link>
                    </div>
                </div>
            </Modal>
            <AppRouter openModal={openModal} />
            <Footer />
        </div>
    );
}

export default App;
