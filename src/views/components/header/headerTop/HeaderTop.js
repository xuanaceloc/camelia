import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPhoneFlip,
    faEnvelope,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import style from './HeaderTop.module.scss';
import config from '../../../../config';
import Cart from './Cart';

const cx = classNames.bind(style);

const HeaderTop = () => {
    const isDesktop = useMediaQuery({ query: '(min-width : 768px)' });

    const [dataSearch, setDataSearch] = useState('');
    const [resultSearch, setResultSearch] = useState();

    // render result search
    const renderSearchItem = (to, src, title, price) => {
        return (
            <Link to={to} className={cx('search-result-item')}>
                <div className={cx('thumb')}>
                    <img src={src} alt="" />
                </div>
                <div className={cx('info')}>
                    <h4 className={cx('info-title')}>{title}</h4>
                    <span className={cx('info-price')}>{price}₫ </span>
                </div>
            </Link>
        );
    };

    const renderResult = () => {
        if (resultSearch) {
            return (
                <>
                    <div className={cx('search-result-list')}>
                        {/* {renderSearchItem()} */}
                    </div>
                    <div className={cx('more-result')}>
                        <Link to="/">Xem thêm 10 sản phẩm</Link>
                    </div>
                </>
            );
        } else {
            return (
                <div className={cx('empty-result')}>
                    Không tìm thấy sản phẩm nào...
                </div>
            );
        }
    };

    // handle change input search
    const handleChangeSearch = (e) => {
        setDataSearch(e.target.value);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('inner')}>
                    <div className={cx('top-left')}>
                        <Link
                            to={config.publicRoutes.home}
                            className={cx('top-left-home')}
                        >
                            <p>Camelia Brand ®</p>
                        </Link>
                    </div>

                    <div className={cx('top-right')}>
                        <div className={cx('contact')}>
                            <span className={cx('contact-icon')}>
                                <FontAwesomeIcon icon={faPhoneFlip} />
                            </span>
                            <a
                                className={cx('contact-link')}
                                href={config.publicRoutes.tel}
                            >
                                19001052
                            </a>
                        </div>
                        {isDesktop && (
                            <>
                                <div className={cx('contact')}>
                                    <span className={cx('contact-icon')}>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </span>
                                    <a
                                        className={cx('contact-link')}
                                        href={config.publicRoutes.gmail}
                                    >
                                        thecameliavn@gmail.com
                                    </a>
                                </div>
                                {/* search */}
                                {/* Using a wrapper <span> tag around the reference element solves this by creating a new parentNode context. */}
                                <span>
                                    <Tippy
                                        visible={!!dataSearch}
                                        interactive
                                        placement="top-start"
                                        offset={[0, 2]}
                                        render={(attrs) => (
                                            <div
                                                className={cx('search-result')}
                                                tabIndex="-1"
                                                {...attrs}
                                            >
                                                {renderResult()}
                                            </div>
                                        )}
                                    >
                                        <div className={cx('search-box')}>
                                            <input
                                                className={cx('search-input')}
                                                placeholder="Nhập tên sản phẩm..."
                                                onChange={handleChangeSearch}
                                                value={dataSearch}
                                            />
                                            <span className={cx('search-icon')}>
                                                <FontAwesomeIcon
                                                    icon={faMagnifyingGlass}
                                                />
                                            </span>
                                        </div>
                                    </Tippy>
                                </span>
                            </>
                        )}
                        <Cart />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
