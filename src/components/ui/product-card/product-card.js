import React from "react";
import Panel from "../../ui/panel/panel";
import { TitleSize } from "../../ui/title/title";
import { ProductImage, ProductTitle, Price, ContentWrapper } from "./styles";

function ProductCart({ product }) {
    return (
        <Panel>
            <ProductImage src={product.image} />
            <ContentWrapper>
                <ProductTitle as="h3" size={TitleSize.SMALL}>
                    {product.name}
                </ProductTitle>
                <Price>
                    {product.price} руб. / {product.weight} гр.
                </Price>
            </ContentWrapper>
        </Panel>
    );
}

export default ProductCart;