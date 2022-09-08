import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

function DefaultLayout({ children }) {
    const cx = classNames.bind(styles);

    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <div className={cx('container')}>
                <Header />
                <div className={cx('main--page')}>
                    <div className={cx('page')}> {children} </div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
