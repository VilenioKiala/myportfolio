import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import Trabalhos from "./trabalhos/Trabalhos";
import SobreMim from "./sobremim/SobreMim";

type AppRouterProps = {
    openModal: () => void;
};

export default function AppRouter({ openModal }: AppRouterProps) {
    return (
        <Switch>
            <Route path="/trabalhos" component={() => <Trabalhos />} />
            <Route
                path="/sobremim"
                component={() => <SobreMim openModal={openModal} />}
            />
            <Route
                path="/"
                exact
                component={() => <Home openModal={openModal} />}
            />
        </Switch>
    );
}
