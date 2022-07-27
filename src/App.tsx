import React from "react";
import "./App.css";
import Footer from "./components/main/Footer";
import Nav from "./components/main/Nav";
import AppRouter from "./pages/AppRouter";
import { withTalkModal } from "./hocs/withTalkModal";
import { withDrawer } from "./hocs/withDrawer";

export type AppProps = {
    openModal: () => void;
    openDrawer: () => void;
};

function App({ openModal, openDrawer }: AppProps) {
    return (
        <div className="App">
            <Nav
                className="px-6 md:px-16 lg:px-36"
                openModal={openModal}
                openDrawer={openDrawer}
            />
            <AppRouter />
            <Footer />
        </div>
    );
}

const AppWithModal = withTalkModal(withDrawer(App));

export default AppWithModal;
