import React from 'react';
import Navbar from "react-material-navbar";
import "../css/index.css";
import Img from 'react-image';

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    width:"30px",
    height:"20px",
    position:"relative",
    marginTop: "10px",
    radius:"10px",
    width: "10%",
    border: "10px",
    textAlign: "left"

};


class Navigation extends React.PureComponent{

    render(){
        return(

            <ul className="lista">
                <li >
                    <a href='#' className="elemento">Search</a>
                </li>
                <li >
                    <a href='#' className="elemento">Reviews</a>
                </li>

            </ul>


        );
    }
}

export default Navigation;
