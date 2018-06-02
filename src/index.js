import React from 'react'
import ReactDOM from 'react-dom'



import Popup from "reactjs-popup";
import Hello from "./components/Menu/Hello";
import BurgerIcon from "./components/Menu/BurgerIcon";
import Menu from "./components/Menu/Menu";
import "./css/hamburgers.css";


import WebFontLoader from 'webfontloader';
import 'react-md/dist/react-md.indigo-pink.min.css'

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    marginTop: "40px"
};
const contentStyle = {
    background: "rgba(255,255,255,0",
    width: "80%",
    border: "none"
};
const App = () => (
    <div style={styles}>
        <Hello name="Hike App" />
        <Popup
            modal
            overlayStyle={{ background: "rgba(255,255,255,0.98" }}
            contentStyle={contentStyle}
            closeOnDocumentClick={false}
            trigger={open => <BurgerIcon open={open} />}
        >
            {close => <Menu close={close} />}
        </Popup>
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));


