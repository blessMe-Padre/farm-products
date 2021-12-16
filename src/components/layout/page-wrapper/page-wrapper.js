import React from "react";
import MainPage from "../../pages/main-page/main-page";
import Footer from "../footer/footer";
import Header from "../header/header";

// Обёртка для контента страниц
function PageWrapper() {
    return (
        <>
            <Header />
            <MainPage />
            <Footer />
        </>
    );
}

export default PageWrapper;