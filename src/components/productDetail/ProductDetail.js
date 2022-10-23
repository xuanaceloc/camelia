import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import style from './ProductDetail.module.scss';
import ProductImg from './productImg/ProductImg';
import ProductDesc from './productDesc/ProductDesc';
import { getProduct } from '../../axios/product';
import ProductInfo from './productInfo/ProductInfo';

const cx = classNames.bind(style);

const demoImg = [
    'https://product.hstatic.net/1000365849/product/11cameliabalo_ebb07c7a124440f2a90a02a233857e12_master.jpg',
    'https://product.hstatic.net/1000365849/product/12cameliabalo_d04d25c2db4743bbae9660150be0b657_master.jpg',
    'https://product.hstatic.net/1000365849/product/13cameliabalo_dd5c5daa74d1411b8367c58944a65942_master.jpg',
    'https://product.hstatic.net/1000365849/product/14cameliabalo_17bc2ec81c254463b24f0e3ac132608e_master.jpg',
];

const ProductDetail = () => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        try {
            getProduct('634b9fc660bada93b042324d')
                .then((res) => setProduct(res.product))
                .catch((err) => console.log(err));
        } catch (error) {
            console.log(error);
        }

        console.log(product.description);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('product')}>
                    {/* <ProductImg /> */}
                    <ProductImg demo={demoImg} />
                    <ProductDesc data={product.description} />
                </div>
                <ProductInfo data={product.info} />
            </div>
        </div>
    );
};

export default ProductDetail;
