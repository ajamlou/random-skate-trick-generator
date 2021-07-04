import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Play from "./pages/play";
import NotFound from "./pages/404";
import "./assets/globalStyles.css";
import Footer from "./components/footer";

export default function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/play/beginner" component={Play} />
            <Route exact path="/play/experienced" component={Play} />
            <Route exact path="/play/pro" component={Play} />
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}
