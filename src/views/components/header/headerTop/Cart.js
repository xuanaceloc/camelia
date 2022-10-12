import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, AnimatePresence } from 'framer-motion';

import images from '../../../../asset';
import Button from '../../../../components/button';
import style from './HeaderTop.module.scss';

const cx = classNames.bind(style);

const Cart = () => {
    const [cartQuality, setCartQuality] = useState(0);
    const [total, settotal] = useState(0);
    const [showCartList, setShowCartList] = useState(false);

    // render cart item
    const renderCartItem = (to, src, title, variant, quality, price) => {
        return (
            <div className={cx('cart-item')}>
                <Link to={to} className={cx('cart-item-thumb')}>
                    <img src={src} alt="" />
                </Link>

                <div className={cx('cart-item-info')}>
                    <Link to={to} className={cx('cart-item-info-title')}>
                        {title}
                    </Link>
                    <small className={cx('cart-item-info-variant')}>
                        Phiên bản: {variant}
                    </small>
                    <span className={cx('cart-item-info-quality')}>
                        Số lượng: {quality}
                        <span className={cx('cart-item-remove')}>Xóa</span>
                    </span>
                    <span className={cx('cart-item-info-price')}>{price}₫</span>
                </div>
            </div>
        );
    };

    const renderCartList = () => {
        if (total) {
            return (
                <>
                    <div className={cx('cart-item-wrapper')}>
                        {/* renderCartItem() */}
                    </div>

                    <div className={cx('cart-footer')}>
                        <h3 className={cx('cart-total')}>
                            Tổng: <span>{total}₫</span>
                        </h3>

                        <div className={cx('btn-group')}>
                            <Button grey>Điều chỉnh</Button>
                            <Button primary>Thanh toán</Button>
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <div className={cx('empty-cart')}>
                    <p>Giỏ hàng trống</p>
                    <p>
                        Tiếp tục mua hàng{' '}
                        <Link to="/" className={cx('empty-cart-link')}>
                            tại đây.
                        </Link>
                    </p>
                </div>
            );
        }
    };

    // handle show cart list
    const handleShowCartList = () => {
        setShowCartList(true);
    };

    const handleHideCartList = () => {
        setShowCartList(false);
    };
    return (
        <div className={cx('cart')}>
            <div className={cx('cart-icon')} onClick={handleShowCartList}>
                <img src={images.cart} alt="" />
                <span className={cx('cart-quality')}>{cartQuality}</span>
            </div>
            <AnimatePresence>
                {showCartList && (
                    <div className={cx('cart-list-wrapper')}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            onClick={handleHideCartList}
                            className={cx('overlay')}
                        ></motion.div>
                        <motion.div
                            initial={{ y: '-150%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '-200%' }}
                            transition={{ duration: 0.5 }}
                            className={cx('cart-list')}
                        >
                            <div className={cx('cart-list-title')}>
                                <h2> Giỏ hàng </h2>
                                <span onClick={handleHideCartList}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </span>
                            </div>
                            {renderCartList()}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Cart;
