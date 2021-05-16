import React from "react";
import { hot } from "react-hot-loader";
import Router from "./router"
import { InfoProvider } from './Context';
const App = (props) => {
        return (
            <InfoProvider>
                <Router>

                </Router>
            </InfoProvider>
    )
}
    
   
export default hot(module)(App);