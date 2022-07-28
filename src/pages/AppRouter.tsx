import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import Trabalhos from "./trabalhos/Trabalhos";
import SobreMim from "./sobremim/SobreMim";
import Error404 from "./error404/Error404";

function AppRouter() {
    return (
        <Switch>
            <Route path="/trabalhos/" exact component={() => <Trabalhos />} />
            <Route path="/sobremim/" exact component={SobreMim} />
            <Route path="/" exact component={Home} />
            <Route path="*" exact component={Error404} />
        </Switch>
    );
}

export default AppRouter;
