import classNames from 'classnames/bind';
import { useState } from 'react';

import style from '../ProductDetail.module.scss';
import Button from '../../button';

const cx = classNames.bind(style);

const ProductInfo = ({ data = {} }) => {
    const { name, price, desc, detail = [], color = [] } = data;

    const [quality, setQuality] = useState(1);
    const [colorSelect, setColorSelect] = useState(color[0]);

    const handleChangeColorSelect = (e) => {
        setColorSelect(e.target.dataset.color);
    };

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
        <div className={cx('detail')}>
            <h1 className={cx('detail-title')}>{name}</h1>
            <hr />
            <div className={cx('detail-price')}>{price}₫</div>
            <div className={cx('detail-desc')}>
                <p>{desc}</p>
                <ul>
                    {detail.map((detail, index) => {
                        return <li key={index}>{detail}</li>;
                    })}
                </ul>
            </div>
            {/* variant */}
            <div className={cx('variant-group')}>
                <h5>Màu sắc</h5>
                <div className={cx('variant')}>
                    {color.map((color, index) => {
                        return (
                            <div
                                key={index}
                                className={
                                    colorSelect === color
                                        ? cx('variant-item', 'active')
                                        : cx('variant-item')
                                }
                            >
                                <span
                                    data-color={color}
                                    onClick={handleChangeColorSelect}
                                    className={`${cx(
                                        'variant-color',
                                    )} ${color}`}
                                ></span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className={cx('quality-group')}>
                <h5>Số lượng</h5>
                <div className={cx('quality')}>
                    <button onClick={handleDecreaseQuality}>-</button>
                    <input min="1" value={quality} onChange={selectQuality} />
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
    );
};

export default ProductInfo;
