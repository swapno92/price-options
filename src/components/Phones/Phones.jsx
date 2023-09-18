// import React from 'react';

import axios from "axios";
import { useEffect, useState } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";
import { Audio } from 'react-loader-spinner'

const Phones = () => {
    const [phone, setPhone] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(res => res.json())
        //     .then(data => setPhone(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data
                const phoneWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj
                })
                setPhone(phoneWithFakeData);
                setLoading(false)
            })
    }, [])
    return (
        <div>
            {loading && <Audio
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="audio-loading"
                wrapperStyle={{}}
                wrapperClass="wrapper-class"
                visible={true}
            />}
            <h2 className="text-5xl">Phones:{phone.length}</h2>
            <BarChart width={1200} height={400} data={phone}>
                <Bar dataKey='price' fill="gray"></Bar>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;