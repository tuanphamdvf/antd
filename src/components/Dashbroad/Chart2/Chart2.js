import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';

const Chart2 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('http://localhost:3000/chart2')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        isGroup: true,
        xField: 'date',
        yField: 'number',
        seriesField: 'name',

        dodgePadding: 2,

        intervalPadding: 20,
        label: {
            position: 'middle',

            layout: [
                {
                    type: 'interval-adjust-position',
                },
                {
                    type: 'interval-hide-overlap',
                },
                {
                    type: 'adjust-color',
                },
            ],
        },
    };

    return <Column {...config} />;
};
export default Chart2;
