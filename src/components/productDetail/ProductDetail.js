import classNames from 'classnames/bind';
import { useState } from 'react';

import style from './ProductDetail.module.scss';
import Button from '../button';
import ProductImg from './productImg/ProductImg';
import ProductDesc from './productDesc/ProductDesc';

const cx = classNames.bind(style);

const demoImg = [
    'https://product.hstatic.net/1000365849/product/11cameliabalo_ebb07c7a124440f2a90a02a233857e12_master.jpg',
    'https://product.hstatic.net/1000365849/product/12cameliabalo_d04d25c2db4743bbae9660150be0b657_master.jpg',
    'https://product.hstatic.net/1000365849/product/13cameliabalo_dd5c5daa74d1411b8367c58944a65942_master.jpg',
    'https://product.hstatic.net/1000365849/product/14cameliabalo_17bc2ec81c254463b24f0e3ac132608e_master.jpg',
];

const ProductDetail = () => {
    const [quality, setQuality] = useState(1);

    const handleIncreaseQuality = () => {
        setQuality((prev) => prev + 1);
    };

    const handleDecreaseQuality = () => {
        if (quality === 1) return;
        setQuality((prev) => prev - 1);
    };

    const selectQuality = (e) => {
        const value = e.target.value * 1;
        if (isNaN(value)) return;
        setQuality(value);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('product')}>
                    {/* <ProductImg /> */}
                    <ProductImg demo={demoImg} />
                    <ProductDesc />
                </div>

                <div className={cx('detail')}>
                    <h1 className={cx('detail-title')}>
                        NEW ORIGINAL BACKPACK
                    </h1>
                    <hr />
                    <div className={cx('detail-price')}>370,000₫</div>
                    <div className={cx('detail-desc')}>
                        <p>
                            Hãy để Nano Wallet™ sắp xếp lại sự lộn xộn của những
                            tờ tiền mặt và thẻ nhựa trong túi giúp bạn trở nên
                            thật phong cách và tiết kiệm được nhiều thời gian
                            lãng phí.
                        </p>
                        <ul>
                            <li>Kích thước: 10.5 x 7.5 cm</li>
                            <li>
                                Chất liệu: Vải Polyester Canvas cao cấp chống
                                thấm nước
                            </li>
                            <li>Ngăn chính + 4 Ngăn thẻ</li>
                            <li>Ngăn chính đựng vừa Cà vẹt xe & CMND cũ</li>
                        </ul>
                    </div>
                    {/* variant */}
                    <div className={cx('variant-group')}>
                        <h5>Màu sắc</h5>
                        <div className={cx('variant')}>
                            <div className={cx('variant-item', 'active')}>
                                <span
                                    className={`${cx('variant-color')} be`}
                                ></span>
                            </div>
                        </div>
                    </div>

                    <div className={cx('quality-group')}>
                        <h5>Số lượng</h5>
                        <div className={cx('quality')}>
                            <button onClick={handleDecreaseQuality}>-</button>
                            <input
                                min="1"
                                value={quality}
                                onChange={selectQuality}
                            />
                            <button onClick={handleIncreaseQuality}>+</button>
                        </div>
                    </div>

                    <div className={cx('more-btn')}>
                        <Button outline large className={cx('btn')}>
                            Thêm vào giỏ
                        </Button>
                        <Button primary large className={cx('btn')}>
                            mua ngay
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
