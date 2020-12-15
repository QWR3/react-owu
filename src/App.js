import './App.css';
import { BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";
import Oll from "./components/Oll";

function App() {
    return (
        <Router>
            <div>
                <div>
                    <Link to={"/user"}><button>users</button></Link>

                </div>
                <div>
                    <Link to={"/"}><button>home</button></Link>

                </div>
                <div>
                    <Switch>
                        <Route path={"/user"}>
                            <Oll/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>

    );
}
export default App;


