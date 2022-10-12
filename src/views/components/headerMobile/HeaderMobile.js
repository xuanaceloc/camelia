import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faMagnifyingGlass,
    faPhoneFlip,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import style from './HeaderMobile.module.scss';
import images from '../../../asset/index';
import config from '../../../config';
import Cart from '../header/headerTop/Cart';
import NavMobile from './navMobile';

const cx = classNames.bind(style);

const HeaderMobile = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () => {
        setOpenMenu(true);
    };

    const handleCloseMenu = () => {
        setOpenMenu(false);
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('action')}>
                    <div className={cx('action-item')} onClick={handleOpenMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <AnimatePresence>
                        {openMenu && <NavMobile onClose={handleCloseMenu} />}
                    </AnimatePresence>
                    <div className={cx('action-item')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </div>
                <div className={cx('logo')}>
                    <Link to="/" className={cx('logo-link')}>
                        <img src={images.logo} alt="" />
                    </Link>
                </div>
                <div className={cx('action')}>
                    <div className={cx('action-item')}>
                        <a href={config.publicRoutes.tel}>
                            <FontAwesomeIcon icon={faPhoneFlip} />
                        </a>
                    </div>
                    <div className={cx('action-item')}>
                        <Cart />
                    </div>
                </div>
            </div>
            <div className={cx('container')}></div>
        </>
    );
};

export default HeaderMobile;
