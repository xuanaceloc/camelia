import classNames from 'classnames/bind';

import style from './ProductPage.module.scss';
import Product from '../../components/product';

const cx = classNames.bind(style);

const ProductPage = () => {
    const handleChangeSort = (e) => {
        console.log(e.target.value);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('header')}>
                    <h2 className={cx('title')}>BACKPACKS</h2>

                    <div className={cx('select-storing')}>
                        <label htmlFor={style.sortBy}>Sắp xếp theo</label>
                        <select
                            name="SortBy"
                            id={style.sortBy}
                            onChange={handleChangeSort}
                        >
                            <option value="best-selling">
                                Sản phẩm bán chạy
                            </option>
                            <option value="price-ascending">
                                Giá từ thấp tới cao
                            </option>
                            <option value="price-descending">
                                Giá từ cao tới thấp
                            </option>
                        </select>
                    </div>
                </div>

                <div className={cx('product-list')}>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
