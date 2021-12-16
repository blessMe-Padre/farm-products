import React from "react";
import logo from "../../../assets/logo.svg"

function Logo() {
    return (
        <a href="/">
            <img src={logo} alt="логотип" />
            <span>Фермерские продукты</span>
        </a>
    );
}

export default Logo;