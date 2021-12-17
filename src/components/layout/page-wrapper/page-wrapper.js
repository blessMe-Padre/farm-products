import React from "react";
// import MainPage from "../../pages/main-page/main-page";
import Footer from "../footer/footer";
import Header from "../header/header";
import Order from "../../pages/order/order";
import { Main } from "./styles";

// Обёртка для контента страниц
function PageWrapper({ children, features }) {
    return (
        <>
            <Header />
            <Main>
                <Order />
            </Main>
            {/* <main className="page-wrapper__main">
                <MainPage features={features} />
            </main> */}
            <Footer />
        </>
    );
}

export default PageWrapper;