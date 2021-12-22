import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import { Main } from "./styles";

// Обёртка для контента страниц
function PageWrapper({
    pageUrl, // навигация для шапки
    children // контент страницы
}) {
    return (
        <>
            <Header pageUrl={pageUrl} />
            <Main>{children}</Main>
            <Footer />
        </>
    );
}

export default PageWrapper;