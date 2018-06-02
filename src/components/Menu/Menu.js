import React from "react";
import "../../css/index.css";

export default ({ close }) => (
    <div className="menu">
        <ul style={{color:"white", listStyle:"none"}}>
            <li onClick={close} style={{paddingBottom:"20px"}}>
                <a href='#'  style={{color:"white", textDecoration:"none"}}>Search Hike</a>
            </li>
            <li onClick={close}  style={{paddingBottom:"20px"}}>
                <a href='#' style={{color:"white", textDecoration:"none"}}>My Hikes</a>
            </li>
            <li onClick={close}  style={{paddingBottom:"20px"}}>
                <a href='#' style={{color:"white", textDecoration:"none"}}>Reviews</a>
            </li>
        </ul>
    </div>
);
