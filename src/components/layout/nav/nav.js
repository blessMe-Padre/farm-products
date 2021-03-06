import React from "react";
import Button from "../../ui/button/button"

// import { Ul, Li } from "/src/components/styled";
import Ul from "../../styled/ul/ul";
import Li from "../../styled/li/li";
import { AppRoute } from "../../../const";
import { StyledButton } from "./styles";

const links = [
    {
        to: AppRoute.MAIN,
        item: <StyledButton link={AppRoute.MAIN}>Главная</StyledButton>
    },
    { to: AppRoute.ORDER, item: <Button link={AppRoute.ORDER}>Купить</Button> }
];

// навигация
function Nav({ pageUrl }) {
    return (
        <nav>
            <Ul>
                {links
                    .filter((link) => link.to !== pageUrl)
                    .map((link) => (
                        <Li key={link.to}>{link.item}</Li>
                    ))}
            </Ul>
        </nav>
    );
}

export default Nav;