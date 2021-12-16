import React from "react";
import Title from "../../ui/title/title";
import Button from "../../ui/button/button";
import FeatureCard from "../../ui/feature-card/feature-card";


// список преимуществ
function FeaturesList({ features }) {
    return features && features.length ? (
        <section className="features">
            <Title>Почему фермерские продукты лучше?</Title>
            <ul className="features__list">
                {features.map((feature) => (
                    <li className="features__item" key={feature.id}>
                        <FeatureCard {...feature} />
                    </li>
                ))}
            </ul>
            <Button>Купить</Button>
        </section>
    ) : null;
}

export default FeaturesList;