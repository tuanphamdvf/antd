import { SmileOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
import React from 'react';

function TimeLine() {
    return (
        <Timeline>
            <h3>Time Line</h3>
            <Timeline.Item color="green">Tạo đơn thành công 2015-09-01</Timeline.Item>
            <Timeline.Item color="green">Tạo đơn thành công 2015-09-01</Timeline.Item>
            <Timeline.Item color="red">
                <p>Tạo nhân viên 1</p>
                <p>Tạo nhân viên 2</p>
                <p>Tạo nhân viên 3 2015-09-01</p>
            </Timeline.Item>
            <Timeline.Item>
                <p>Tạo sản phẩm 1</p>
                <p>Tạo sản phẩm 2</p>
                <p>Tạo sản phẩm 3 2015-09-01</p>
            </Timeline.Item>
            <Timeline.Item color="gray">
                <p>Tạo sản phẩm 1</p>
                <p>Tạo sản phẩm 2</p>
                <p>Tạo sản phẩm 3 2015-09-01</p>
            </Timeline.Item>
            <Timeline.Item color="gray">
                <p>Tạo sản phẩm 1</p>
                <p>Tạo sản phẩm 2</p>
                <p>Tạo sản phẩm 3 2015-09-01</p>
            </Timeline.Item>
            <Timeline.Item color="#00CCFF" dot={<SmileOutlined />}>
                <p>Tạo người dùng</p>
            </Timeline.Item>
        </Timeline>
    );
}

export default TimeLine;
