import React, { useState } from "react";
import Panel from "../../ui/panel/panel";
import Title, { TitleSize } from "../../ui/title/title";
import ProductCart from "../../ui/product-card/product-card";
import Button from "../../ui/button/button";
import CheckboxList from "../../ui/checkbox-list/checkbox-list";
import {
    LeftColumn,
    StyledOrder,
    AddressInput,
    PriceLabel,
    PriceValue,
    ProductSwiper,
    CheckboxLabel
} from "./styles";

import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

// Оформление заказа
function Order({
    products // список продуктов
}) {
    const [swiperRef, setSwiperRef] = useState(null);
    const [selectProductIds, setSelectProductIds] = useState([]);
    const handleOnClickProduct = (value, index) => {
        if (!selectProductIds.includes(value)) {
            swiperRef.slideTo(index, 0);
        }
    };
    return (
        <StyledOrder as="form">
            <LeftColumn>
                <Panel marginBottom={20} paddingTop={24} paddingBottom={10}>
                    <Title as="h2" size={TitleSize.EXTRA_SMALL} marginBottom={12}>
                        Выберите продукты
                    </Title>
                    <CheckboxList
                        labelComponent={CheckboxLabel}
                        name={"select-products"}
                        isGridList={false}
                        options={products.map((product) => ({
                            value: product.id,
                            title: product.name
                        }))}
                        selectValues={selectProductIds}
                        onChange={setSelectProductIds}
                        onClickLabel={handleOnClickProduct}
                    />
                </Panel>
                <Panel>
                    <Title size={TitleSize.EXTRA_SMALL} marginBottom={24}>
                        Сделать заказ
                    </Title>
                    <AddressInput placeholder="Введите адрес доставки" />
                    <PriceLabel as="span">Цена</PriceLabel>
                    <PriceValue>400</PriceValue>
                    <Button maxWidth>Купить</Button>
                </Panel>
            </LeftColumn>
            <ProductSwiper
                onSwiper={setSwiperRef}
                spaceBetween={12}
                direction="vertical"
                slidesPerView="auto"
                scrollbar={{ draggable: true }}
                mousewheel
                pagination={{
                    type: "fanction"
                }}
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <ProductCart product={product} />
                    </SwiperSlide>
                ))}
            </ProductSwiper>
        </StyledOrder>
    );
}

export default Order;
