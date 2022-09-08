import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import {
    AreaChartOutlined,
    ShopOutlined,
    UserOutlined,
    ShoppingCartOutlined,
    ShoppingOutlined,
    GroupOutlined,
    DingtalkOutlined,
    StarOutlined,
    LogoutOutlined,
    CaretLeftOutlined,
    CaretRightOutlined,
} from '@ant-design/icons';
import { useState } from 'react';

function Sidebar() {
    const [hide, setHide] = useState(false);
    const cx = classNames.bind(styles);
    const setOnHide = () => {
        setHide(!hide);
    };

    return (
        <>
            {hide ? (
                <div className={cx('wrapper-hide')}>
                    <div className={cx('sidebar')}>
                        <a href="/" className={cx('title')} id="title__dashbroad">
                            <AreaChartOutlined />
                        </a>
                        <div className={cx('content')}>
                            <div className={cx('item')}>
                                <a href="/product" className={cx('item--wrapper')} id="title__product">
                                    <ShoppingOutlined />
                                </a>
                                <a href="/customer" className={cx('item--wrapper')} id="title__user">
                                    <UserOutlined />
                                </a>
                                <a href="/order" className={cx('item--wrapper')} id="title__oder">
                                    <ShoppingCartOutlined />
                                </a>
                                <a href="/store" className={cx('item--wrapper')} id="title__oder">
                                    <ShopOutlined />
                                </a>
                                <a href="/Staff" className={cx('item--wrapper')} id="title__oder">
                                    <GroupOutlined />
                                </a>
                                <a href="/shiper" className={cx('item--wrapper')} id="title__oder">
                                    <DingtalkOutlined />
                                </a>
                                <a href="/review" className={cx('item--wrapper')} id="title__oder">
                                    <StarOutlined />
                                </a>
                                <a href="/logout" className={cx('item--wrapper')} id="title__oder">
                                    <LogoutOutlined />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={cx('wrapper')}>
                    <div className={cx('sidebar')}>
                        <a href="/" className={cx('title')} id="title__dashbroad">
                            <AreaChartOutlined />
                            <span className={cx('title--content')}>Home</span>
                        </a>
                        <div className={cx('content')}>
                            <div className={cx('item')}>
                                <a href="/product" className={cx('item--wrapper')} id="title__product">
                                    <ShoppingOutlined />

                                    <span className={cx('item--text  ')}>Sản phẩm</span>
                                </a>
                                <a href="/customer" className={cx('item--wrapper')} id="title__user">
                                    <UserOutlined />

                                    <span className={cx('item--text')}>Khách hàng</span>
                                </a>
                                <a href="/order" className={cx('item--wrapper')} id="title__oder">
                                    <ShoppingCartOutlined />
                                    <span className={cx('item--text')}>Đơn hàng</span>
                                </a>
                                <a href="/store" className={cx('item--wrapper')} id="title__oder">
                                    <ShopOutlined />
                                    <span className={cx('item--text')}>Chi nhánh</span>
                                </a>
                                <a href="/Staff" className={cx('item--wrapper')} id="title__oder">
                                    <GroupOutlined />
                                    <span className={cx('item--text')}>Nhân viên</span>
                                </a>
                                <a href="/shiper" className={cx('item--wrapper')} id="title__oder">
                                    <DingtalkOutlined />
                                    <span className={cx('item--text')}>Người giao hàng</span>
                                </a>
                                <a href="/review" className={cx('item--wrapper')} id="title__oder">
                                    <StarOutlined />
                                    <span className={cx('item--text')}>Review</span>
                                </a>
                                <a href="/logout" className={cx('item--wrapper')} id="title__oder">
                                    <LogoutOutlined />
                                    <span className={cx('item--text')}>Đăng xuất</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {!hide ? (
                <div onClick={setOnHide} className={cx('hide')}>
                    <CaretLeftOutlined />
                </div>
            ) : (
                <div onClick={setOnHide} className={cx('onhide')}>
                    <CaretRightOutlined />
                </div>
            )}
        </>
    );
}

export default Sidebar;
