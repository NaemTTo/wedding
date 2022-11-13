import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar } from 'swiper';
import WeddingItem from './WeddingItem';

const WeddingCarousel = (children: JSX.ElementChildrenAttribute) => {
    SwiperCore.use([Scrollbar])

    const settings = {
        slidesPerView: 1,// 한 화면에 보이는 슬라이드 수
        Scrollbar: { draggable: true },
    };
    const swiperStyle = {
        width: '100%',
        height: '100%',
    };

    return (
        <Swiper {...settings} style={swiperStyle}>
            <SwiperSlide><WeddingItem /></SwiperSlide>
            <SwiperSlide><WeddingItem /></SwiperSlide>
            <SwiperSlide><WeddingItem /></SwiperSlide>
            <SwiperSlide><WeddingItem /></SwiperSlide>
        </Swiper>
    )
}

export default WeddingCarousel
