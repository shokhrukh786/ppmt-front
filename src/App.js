
import './App.css';
import Dashboard from "./components/Dashboard";
import {Component} from "react";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component{
    render() {
        return(
            <div className="App">
                <Header/>
                <Dashboard/>
            </div>
        )
    }
}
export default App;

