import React from "react";
import "./App.css";
import Footer from "./components/main/Footer";
import Nav from "./components/main/Nav";
import AppRouter from "./pages/AppRouter";
import { withTalkModal } from "./hocs/withTalkModal";

export type AppProps = {
    openModal: () => void;
};

function App({ openModal }: AppProps) {
    return (
        <div className="App">
            <Nav className="px-6 md:px-16 lg:px-36" openModal={openModal} />
            <AppRouter />
            <Footer />
        </div>
    );
}

const AppWithModal = withTalkModal(App);

export default AppWithModal;
