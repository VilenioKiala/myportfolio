import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import Trabalhos from "./trabalhos/Trabalhos";
import SobreMim from "./sobremim/SobreMim";
import { withLog } from "../hocs/withLog";

function AppRouter() {
    return (
        <Switch>
            <Route path="/trabalhos" component={() => <Trabalhos />} />
            <Route path="/sobremim" component={SobreMim} />
            <Route path="/" exact component={Home} />
        </Switch>
    );
}

export default withLog(AppRouter, "Renderizou o App Router");
