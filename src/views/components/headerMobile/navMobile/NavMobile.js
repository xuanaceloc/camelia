import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

import style from './NavMobile.module.scss';
import config from '../../../../config';

const cx = classNames.bind(style);

const NavMobile = ({ onClose }) => {
    return (
        <div className={cx('wrapper')}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={cx('overlay')}
                onClick={onClose}
            ></motion.div>
            <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ duration: 0.3 }}
                className={cx('content')}
            >
                <button onClick={onClose} className={cx('close-btn')}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <h3 className={cx('header')}>Camelia Brand ®</h3>
                {/* nav img */}
                <div className={cx('nav')} onClick={onClose}>
                    {config.headerNavImg.map((nav, index) => {
                        return (
                            <Link
                                key={index}
                                to={nav.path}
                                className={cx('nav-link')}
                            >
                                <div className={cx('nav-img')}>
                                    <img src={nav.src} alt="" />
                                </div>
                                <div className={cx('nav-title')}>Backpacks</div>
                            </Link>
                        );
                    })}
                </div>

                {/* menu */}
                <div className={cx('menu')} onClick={onClose}>
                    {config.menuMobile.map((menu, index) => {
                        return (
                            <Link
                                key={index}
                                to={menu.path}
                                className={cx('menu-link')}
                            >
                                {menu.title}
                            </Link>
                        );
                    })}
                </div>

                {/* action */}
                <div className={cx('action')}>
                    {config.menuAction.map((action, index) => {
                        return (
                            <a
                                key={index}
                                href={action.path}
                                className={cx('action-item')}
                            >
                                <span>
                                    <FontAwesomeIcon icon={action.icon} />
                                </span>
                                <p>{action.title}</p>
                            </a>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
};

export default NavMobile;
