import classNames from 'classnames/bind';

import style from './HomeVideo.module.scss';

const cx = classNames.bind(style);

const HomeVideo = () => {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>Lối sống Minimalism</h2>
            <div className={cx('desc')}>
                Cùng với thiết kế đơn giản và chất liệu bền bỉ, sản phẩm từ
                Camelia Brand đem đến <br /> cho người dùng nhiều tiện ích để
                khiến cuộc sống bạn trở nên dễ dàng, tối ưu và gọn gàng hơn.{' '}
                <br />
                Xem nhé…
            </div>
            <div className={cx('video')}>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/GTw4fNvorZs"
                    title="Welcome to Camelia Brand"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default HomeVideo;
