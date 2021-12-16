import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import features from "../../mocks/features";
import { GlobalStyle } from "./style";


export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper features={features}>Контент страницы</PageWrapper>
    </>
  );
}
