import React, {useRef, useState} from 'react';

import {Navigation, Pagination, EffectFade, Virtual, EffectCoverflow} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore from "swiper/core";
import "swiper/swiper-bundle.min.css";

import './testimonials.css'
import {data} from './data'

SwiperCore.use([EffectCoverflow, Pagination])
//copy avatars folder in public
const Testimonials = () => {

    // Create array with 1000 slides
    const slides = Array.from({length: 1000}).map(
        (el, index) => `Slide ${index + 1}`
    );

    return (
        <section className={'main-testimonials-wrapper'}>
            <h1
                style={{
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    color: '#4ab',
                    fontWeight: '900',
                }}
            >
                my happy clients
            </h1>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 6,
                    slideShadows: true,
                }}
                pagination={true}
            >
                {data.map((item, key) => (
                    <SwiperSlide>
                        <img src={item.image} alt={item.name}/>
                        <h3>{item.name}</h3>
                        <p>{item.testimony}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/*<Swiper
                spaceBetween={50}
                slidesPerView={3}
                centeredSlides
                onSlideChange={() => console.log("slide change")}
                onSwiper={swiper => console.log(swiper)}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>*/}
            {/*<Swiper modules={[EffectFade]} effect="fade">
            {[1, 2, 3].map((i, el) => {
                return <SwiperSlide>Slide {el}</SwiperSlide>;
            })}
        </Swiper>*/}
            {/*<Swiper modules={[Virtual]} spaceBetween={50} slidesPerView={3} virtual>
            {slides.map((slideContent, index) => (
                <SwiperSlide key={slideContent} virtualIndex={index}>
                    {slideContent}
                </SwiperSlide>
            ))}
        </Swiper>*/}

        </section>
    );
}

export default Testimonials
