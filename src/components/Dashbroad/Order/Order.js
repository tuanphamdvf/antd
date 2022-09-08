import styles from './Order.module.scss';
import classNames from 'classnames/bind';
import { CalendarOutlined, CalculatorOutlined, UserAddOutlined } from '@ant-design/icons';

function NewOrder() {
    const cx = classNames.bind(styles);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container--main')}>
                <div className={cx('calendar')}>
                    <div>
                        <span>Lịch hẹn</span>
                        <CalendarOutlined />
                    </div>
                    <div>
                        <div>
                            <span>10</span>
                            <span>Sắp tới</span>
                        </div>
                        <div>
                            <span>133</span>
                            <span>Tháng này</span>
                        </div>
                    </div>
                </div>
                <div className={cx('orders')}>
                    <div>
                        <span>Thu ngân</span>
                        <CalculatorOutlined />
                    </div>
                    <div>
                        <div>
                            <span>10,000,00đ</span>
                            <span>Hôm nay</span>
                        </div>
                        <div>
                            <span>12,000,000</span>
                            <span>Hôm qua</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <span>Khách mới</span>
                        <UserAddOutlined />
                    </div>
                    <div>
                        <div>
                            <span>10</span>
                            <span>Hôm nay</span>
                        </div>
                        <div>
                            <span>133</span>
                            <span>Tháng này</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>Danh sách hoá đơn</div>
                <div>Doanh thu theo ngày</div>
                <div>Hoa hồng nhân viên</div>
                <div>Nhập xuất kho hàng</div>
            </div>
            <div>
                <div>Danh sách sản phẩm </div>
                <div>Sổ quỹ thu chi</div>
                <div>Thẻ thành viên</div>
                <div>Thông tin tài khoản</div>
                <div>Thông tin cửa hàng</div>
            </div>
        </div>
    );
}

export default NewOrder;
