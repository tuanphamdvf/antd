import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { BellFilled } from '@ant-design/icons';
function Header() {
    const cx = classNames.bind(styles);
    const [user, setUser] = useState();
    const [logout, setLogout] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const user = localStorage.getItem('lastName') + localStorage.getItem('firstName');
        setUser(user);
    }, []);

    const showExit = () => setLogout(!logout);
    const handleLogout = () => {
        localStorage.clear();
        setLogout(false);
        window.location.reload();
        navigate('/login');
    };
    return (
        <header className={cx('header')}>
            <div className={cx('header--title')}>HANA</div>

            <div className={cx('header--action')}>
                <div className={cx('header--icon')}>
                    <div className={cx('header--icon--content')}>
                        {user ? <span className={cx('user')}>{user}</span> : ''}
                        <BellFilled />
                        {logout === true ? (
                            <div className={cx('showlogout')} onClick={handleLogout}>
                                <span>Đăng xuất</span>
                                <i icon="sign-out" />
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
                <img onClick={showExit} className={cx('icon')} alt="img" src="https://cdn-icons-png.flaticon.com/512/147/147142.png" />
            </div>
        </header>
    );
}

export default Header;
