import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';
import { numberWithCommas } from '../../Function/Function';

const Chart1 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('http://localhost:3000/Chart1')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        xField: 'month',
        yField: 'total',
        seriesField: 'name',
        yAxis: {
            label: {
                formatter: (v) => `${numberWithCommas(v)}đ`,
            },
        },
        legend: {
            position: 'top',
        },
        tooltip: {
            formatter: (datum) => {
                return { name: datum.name, value: `${numberWithCommas(datum.total)}đ` };
            },
        },
        smooth: true,
        animation: {
            appear: {
                animation: 'path-in',
                duration: 2000,
            },
        },
    };

    return <Line {...config} />;
};
export default Chart1;
