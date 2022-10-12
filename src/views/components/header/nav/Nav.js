import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import style from './Nav.module.scss';
import images from '../../../../asset';
import config from '../../../../config';

const cx = classNames.bind(style);

const Nav = () => {
    // render top nav
    const RenderTopNav = ({ path, title }) => {
        return (
            <NavLink
                to={path}
                className={({ isActive }) =>
                    cx(
                        'nav-top-item-link',
                        isActive ? 'nav-top-item-link-active' : '',
                    )
                }
            >
                {title}
            </NavLink>
        );
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('nav-top')}>
                <div className={cx('nav-top-item')}>
                    {config.headerNav.left.map((item, index) => {
                        return (
                            <RenderTopNav
                                key={index}
                                path={item.path}
                                title={item.title}
                            />
                        );
                    })}
                </div>

                <div className={cx('logo')}>
                    <NavLink to="/">
                        <img src={images.logo} alt="" />
                    </NavLink>
                </div>

                <div className={cx('nav-top-item')}>
                    {config.headerNav.right.map((item, index) => {
                        return (
                            <RenderTopNav
                                key={index}
                                path={item.path}
                                title={item.title}
                            />
                        );
                    })}
                </div>
            </div>

            <div className={cx('nav-bottom')}>
                <div className={cx('nav-bottom-list')}>
                    {config.headerNavImg.map((nav, index) => {
                        return (
                            <NavLink
                                key={index}
                                to={nav.path}
                                className={({ isActive }) =>
                                    cx(
                                        'nav-bottom-link',
                                        isActive
                                            ? 'nav-bottom-link-active'
                                            : '',
                                    )
                                }
                            >
                                <div className={cx('nav-bottom-img')}>
                                    <img
                                        src={nav.src}
                                        alt=""
                                        className={cx(
                                            'nav-bottom-img-no-active',
                                        )}
                                    />

                                    <img
                                        src={nav.srcActive}
                                        alt=""
                                        className={cx('nav-bottom-img-active')}
                                    />
                                </div>
                                <div className={cx('nav-bottom-link-title')}>
                                    Wallets
                                </div>
                            </NavLink>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Nav;
