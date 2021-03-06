import "./App.css";
import Header from "./components/index/Header/Header";
import Home from "./components/index/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/checkout">
                        <Header />
						<Checkout />
                    </Route>
                    <Route path="/">
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
