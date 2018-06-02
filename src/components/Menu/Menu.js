import React from "react";

export default ({ close }) => (
    <div className="menu">
        <ul>
            <li onClick={close}>Home</li>
            <li onClick={close}>Hike 1</li>
            <li onClick={close}>Hike 2</li>
            <li onClick={close}>Reviews</li>

        </ul>
    </div>
);
