import React from "react";
// import MainPage from "../../pages/main-page/main-page";
import Footer from "../footer/footer";
import Header from "../header/header";
import Order from "../../pages/order/order";
import { Main } from "./styles";

// Обёртка для контента страниц
function PageWrapper({ children, features, products }) {
    return (
        <>
            <Header />
            <Main>
                <Order products={products} />
            </Main>
            <Footer />
        </>
    );
}

export default PageWrapper;