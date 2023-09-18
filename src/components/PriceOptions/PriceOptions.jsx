// import React from 'react';

import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
            "name": "Smartphone X",
            "id": 1,
            "features": ['High-resolution camera', '128GB storage', '6.2-inch AMOLED screen'],
            "price": 59
        },
        {
            "name": "Laptop Pro",
            "id": 2,
            "features": ['Quad-core processor', '8GB RAM, 512GB SSD'],
            "price": 89
        },
        {
            "name": "Coffee Maker Deluxe",
            "id": 3,
            "features": ['Programmable', '12-cup capacity', 'built-in grinder'],
            "price": 79
        }
    ]

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best prices in the town</h2>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-5">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;