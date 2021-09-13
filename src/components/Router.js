import { HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Auth from "routes/Auth"
import Home from "routes/Home"
import Profile from "./Profile"
import Navigation from "./Navigation"

const AppRouter = ({isLoggedIn}) => {
    
    return(
        <Router>
            {isLoggedIn && <Navigation />}
            <switch>
                {isLoggedIn ?(
                    <>
                        <Route exact path = "/">
                            <Home />
                        </Route>
                        <Route exact path="/profile">
                            <Profile />
                        </Route>
                    </>
                ) : (
                    <Route exact path = "/">
                        <Auth />
                    </Route>
                )}
            </switch>
        </Router>
    );
};

export default AppRouter;