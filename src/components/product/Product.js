import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import style from './Product.module.scss';

const cx = classNames.bind(style);

const demoItem = [
    {
        src: 'https://product.hstatic.net/1000365849/product/11balocamelia_bfd424d0f91c44cfaf84a404bbd34d35_large.jpg',
        color: 'black',
    },
    {
        src: 'https://product.hstatic.net/1000365849/product/21balocamelia_00c203c2112247b39d505e6ab817e6a3_large.jpg',
        color: 'grey',
    },
    {
        src: 'https://product.hstatic.net/1000365849/product/31balocamelia_3ca8bac55eab42839ccd5c3363f45f2c_large.jpg',
        color: 'blue',
    },
    {
        src: 'https://product.hstatic.net/1000365849/product/global_backpack_1.5_4aac32cba90c45999f877caff2b5d09c_large.jpg',
        color: 'orange',
    },
    {
        src: 'https://product.hstatic.net/1000365849/product/global_backpack-kem1.5_e054a04715aa4deeb05840e89f704988_large.jpg',
        color: 'be',
    },
];

const Product = () => {
    const [mainImg, setMainImg] = useState(demoItem[0].src);

    const handleSelectColor = (e) => {
        setMainImg(e.target.dataset.src);
    };

    return (
        <div className={cx('wrapper')}>
            <Link to="/">
                <div className={cx('thumb')}>
                    <img alt="" src={mainImg} />
                </div>
            </Link>
            <div className={cx('variant')}>
                {/* just demo */}
                {demoItem.map((item, index) => {
                    let classes;
                    if (item.src === mainImg) {
                        classes = cx('variant-item', 'active');
                    } else {
                        classes = cx('variant-item');
                    }
                    return (
                        <div key={index} className={classes}>
                            <span
                                onClick={handleSelectColor}
                                data-src={item.src}
                                className={`${cx('variant-color')} ${
                                    item.color
                                }`}
                            ></span>
                        </div>
                    );
                })}
            </div>
            <Link to="/" className={cx('name')}>
                New Original Backpack
            </Link>
            <div className={cx('price')}>460,000₫</div>
        </div>
    );
};

export default Product;
