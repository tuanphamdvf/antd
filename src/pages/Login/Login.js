import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
const Login = (props) => {
    const cx = classNames.bind(styles);

    const [isError, setIsError] = useState('');
    const { getUser } = props;
    const navigate = useNavigate();
    const onFinish = async (values) => {
        const { username, password } = values;

        const data = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                password,
            }),
        }).then((res) => res.json());
        localStorage.setItem('token', data.token);
        localStorage.setItem('firstName', data.firstName);
        localStorage.setItem('lastName', data.lastName);

        const token = localStorage.getItem('token');
        getUser(token);
        if (token === 'undefined') {
            setIsError('Tài khoản hoặc mật khẩu không chính xác, vui lòng thử lại');
        } else {
            setIsError('');
            navigate('/');
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="User"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Ghi nhớ </Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Đăng nhập
                        </Button>
                    </Form.Item>
                    {isError !== '' ? <alert showIcon type="error" description={isError} /> : ''}
                </Form>
            </div>
        </div>
    );
};

export default Login;
