import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import style from './ProductImg.module.scss';
const cx = classNames.bind(style);

const demoImg = [
    {
        src: 'https://product.hstatic.net/1000365849/product/11cameliabalo_ebb07c7a124440f2a90a02a233857e12_master.jpg',
    },
    {
        src: 'https://product.hstatic.net/1000365849/product/12cameliabalo_d04d25c2db4743bbae9660150be0b657_master.jpg',
    },
    {
        src: 'https://product.hstatic.net/1000365849/product/13cameliabalo_dd5c5daa74d1411b8367c58944a65942_master.jpg',
    },
    {
        src: 'https://product.hstatic.net/1000365849/product/14cameliabalo_17bc2ec81c254463b24f0e3ac132608e_master.jpg',
    },
];

const ProductImg = () => {
    const [activeThumb, setActiveThumb] = useState();

    const prevBtnRef = useRef();
    const nextBtnRef = useRef();
    return (
        <div>
            <Swiper
                loop
                modules={[Navigation, Thumbs]}
                slidesPerView={1}
                grabCursor={true}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevBtnRef.current;
                    swiper.params.navigation.nextEl = nextBtnRef.current;
                }}
                thumbs={{ swiper: activeThumb }}
            >
                {demoImg.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className={cx('product-img')}>
                                <img src={item.src} alt="" />
                            </div>
                        </SwiperSlide>
                    );
                })}

                {/* btn control slide */}
                <button className={cx('prev-btn')} ref={prevBtnRef}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className={cx('next-btn')} ref={nextBtnRef}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </Swiper>
            <div className={cx('thumb-wrapper')}>
                <Swiper
                    // onSwiper={setActiveThumb}
                    slidesPerView={5}
                    modules={[Navigation, Thumbs]}
                    loop
                    spaceBetween={10}
                >
                    {demoImg.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className={cx('product-img-thumb')}>
                                    <img src={item.src} alt="" />
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default ProductImg;
