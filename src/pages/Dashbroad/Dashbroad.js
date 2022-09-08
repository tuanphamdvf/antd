import styles from './Dashbroad.module.scss';
import classNames from 'classnames/bind';
import Chart1 from '../../components/Dashbroad/Chart1/Chart1';
import Chart2 from '../../components/Dashbroad/Chart2/Chart2';
import Chart3 from '../../components/Dashbroad/Chart2/Chart3';
import TimeLine from '../../components/Dashbroad/TimeLine/TimeLine';
import NewOrder from '../../components/Dashbroad/Order/Order';
function Dashbroad() {
    const cx = classNames.bind(styles);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('chart__total')}>
                <Chart1 />
            </div>
            <div className={cx('wrapper__chart23')}>
                <div className={cx('chart2')}>
                    <Chart2 />
                </div>
                <div className={cx('chart3')}>
                    <Chart3 />
                </div>
            </div>
            <div className={cx('timeline')}>
                <div className={cx('listorder')}>
                    {' '}
                    <NewOrder />
                </div>
                <div className={cx('timeline-_chart')}>
                    <TimeLine />
                </div>
            </div>
            <div className={cx('wrapper__order')}></div>
        </div>
    );
}

export default Dashbroad;
