import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/scss/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import style from './Slider.module.scss';
import config from '../../config';
import { useRef } from 'react';

const cx = classNames.bind(style);

const Slider = () => {
    const prevBtn = useRef();
    const nextBtn = useRef();
    return (
        <div className={cx('wrapper')}>
            <Swiper
                loop
                modules={[Pagination, Autoplay, Navigation]}
                autoplay={{
                    delay: 2500,
                }}
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        return `<span class='${cx(
                            'slide-bullet',
                        )} ${className}' ${index}></span>`;
                    },
                    bulletActiveClass: cx('slide-bullet-active'),
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevBtn.current;
                    swiper.params.navigation.nextEl = nextBtn.current;
                }}
            >
                {config.slider.map((slide, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Link to={slide.path} className={cx('slide-item')}>
                                <img src={slide.src} alt="" />
                            </Link>
                        </SwiperSlide>
                    );
                })}
                <button ref={prevBtn} className={cx('prev-btn')}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button ref={nextBtn} className={cx('next-btn')}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </Swiper>
        </div>
    );
};

export default Slider;
