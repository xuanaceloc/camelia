import classNames from 'classnames/bind';

import style from './Section.module.scss';
import Product from '../product';

const cx = classNames.bind(style);

const Section = () => {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Backpacks</h1>
            <div className={cx('container')}>
                <Product />
                <Product />
                <Product />
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
    );
};

export default Section;
