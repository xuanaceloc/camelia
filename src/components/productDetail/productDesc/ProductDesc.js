import classNames from 'classnames/bind';
import { useState } from 'react';

import style from './ProductDesc.module.scss';
import Docs from '../../docs';
const cx = classNames.bind(style);

const ProductDesc = ({ data = [] }) => {
    const [isActiveVideo, setIsActiveVideo] = useState(false);

    const handleActiveVideoBtn = () => {
        setIsActiveVideo(true);
    };

    const handleActiveDescBtn = () => {
        setIsActiveVideo(false);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('btn-wrapper')}>
                <button
                    onClick={handleActiveDescBtn}
                    className={cx('btn', { active: !isActiveVideo })}
                >
                    Mô tả sản phẩm
                </button>
                <button
                    onClick={handleActiveVideoBtn}
                    className={cx('btn', { active: isActiveVideo })}
                >
                    Video sản phẩm
                </button>
            </div>
            <div className={cx('content')}>
                {isActiveVideo ? (
                    <div>Video</div>
                ) : (
                    <Docs data={data} className={'content-desc'} />
                )}
            </div>
        </div>
    );
};

export default ProductDesc;
