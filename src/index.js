import React from 'react'
import ReactDOM from 'react-dom'
import Navigation from "./components/Navigation";
import Navbar from "react-material-navbar";
import "./css/index.css";
import Img from 'react-image';
import Popup from "reactjs-popup";

import BurgerIcon from "./components/Menu/BurgerIcon";
import Menu from "./components/Menu/Menu";


const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

const contentStyle = {
    background: "rgb(13, 71, 161)",
    width: "10%",
    height: "120px",
    border: "10px",
    textAlign: "left",
    marginLeft: "7px",
    marginTop: "76px"
};



const App = () => (
    <div style={{height:"10px"}}>
        <Navbar title={'Hikeup'}/>

        <BurgerIcon
            overlayStyle={{ background: "rgba(255,255,255,0.98" }}/>
        <Navigation overlayStyle={{ background:"rgba(255,255,255,0.98"}}
        />
        <div style={styles}>
        <Popup
            modal overlayStyle={{ background:"none"}}
            contentStyle={contentStyle}
            closeOnDocumentClick={false}
            trigger={open => <BurgerIcon open={open} />}
        >
            {close => <Menu close={close} />}
        </Popup>
    <div>
        <img src="https://previews.123rf.com/images/jakobradlgruber/jakobradlgruber1407/jakobradlgruber140700012/30069447-vista-panor%C3%A1mica-del-hermoso-paisaje-de-monta%C3%B1a-en-los-alpes-de-bavaria-con-el-pueblo-de-berchtesgaden-y-.jpg"/>
    </div>

        </div>
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));





