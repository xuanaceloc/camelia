import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import style from './Footer.module.scss';
import config from '../../../config';

const cx = classNames.bind(style);

const Footer = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                {/* location */}
                <div className={cx('location')}>
                    <h3 className={cx('location-title')}>
                        <Link to={config.publicRoutes.home}>CAMELIA BRAND</Link>
                    </h3>

                    {config.footerLocation.map((item, index) => {
                        let Comp = Link;
                        if (item.href) {
                            Comp = 'a';
                        }
                        return (
                            <div key={index} className={cx('location-info')}>
                                <span>
                                    <FontAwesomeIcon icon={item.icon} />
                                </span>
                                <Comp to={item.path} href={item.href}>
                                    {item.title}
                                </Comp>
                            </div>
                        );
                    })}
                </div>

                <div className={cx('body')}>
                    <div className={cx('footer-subscribe')}>
                        <h3 className={cx('footer-subscribe-title')}>
                            ĐĂNG KÝ NHẬN TIN
                        </h3>
                        <div className={cx('footer-subscribe-input')}>
                            <input placeholder="Nhập email của bạn..." />
                            <button
                                className={cx('footer-subscribe-input-button')}
                            >
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </div>
                        <div className={cx('footer-subscribe-desc')}>
                            Cập nhật những sản phẩm mới nhất từ Camelia Brand
                            nhé!
                        </div>
                        <div className={cx('footer-subscribe-social')}>
                            {config.footerSocial.map((item, index) => {
                                return (
                                    <a key={index} href={item.path}>
                                        <img src={item.icon} alt="" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <div className={cx('footer-nav')}>
                        <h3 className={cx('footer-nav-title')}>BẠN NÊN XEM</h3>
                        <div className={cx('footer-nav-body')}>
                            {config.footerNav.map((nav, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={cx('footer-nav-item')}
                                    >
                                        <Link to={nav.path}>{nav.title}</Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('copy-right')}>
                <span>
                    Copyrights © 2022 by{' '}
                    <a
                        href={config.publicRoutes.camelia}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Camelia Brand
                    </a>
                </span>
            </div>
        </div>
    );
};

export default Footer;
