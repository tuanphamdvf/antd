import React from 'react';

import { Pie } from '@ant-design/plots';

const Chart3 = () => {
    const data = [
        {
            type: 'Iphone X',
            value: 27,
        },
        {
            type: 'Macbook m2',
            value: 25,
        },
        {
            type: 'Iphone 9',
            value: 18,
        },
        {
            type: 'Iphone 14',
            value: 15,
        },
        {
            type: 'Iphone 12',
            value: 10,
        },
        {
            type: 'Khác ',
            value: 5,
        },
    ];
    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        label: {
            type: 'inner',
            offset: '-30%',
            content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
            style: {
                fontSize: 14,
                textAlign: 'center',
            },
        },
        interactions: [
            {
                type: 'element-active',
            },
        ],
    };
    return <Pie {...config} />;
};
export default Chart3;
