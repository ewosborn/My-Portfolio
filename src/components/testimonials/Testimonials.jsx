import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

/* ========================== ARRAY OF PORTFOLIOS ==================== */
const data = [
    {
        avatar: AVTR1,
        name: 'Ama Bintu',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas incidunt eaque autem quidem ea ipsam, esse suscipit, neque distinctio sint nulla dolorum, necessitatibus rerum eligendi a voluptatum consectetur vel maxime!'
    },
    {
        avatar: AVTR2,
        name: 'Ama Bintu',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas incidunt eaque autem quidem ea ipsam, esse suscipit, neque distinctio sint nulla dolorum, necessitatibus rerum eligendi a voluptatum consectetur vel maxime!'
    },
    {
        avatar: AVTR3,
        name: 'Ama Bintu',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas incidunt eaque autem quidem ea ipsam, esse suscipit, neque distinctio sint nulla dolorum, necessitatibus rerum eligendi a voluptatum consectetur vel maxime!'
    },
    {
        avatar: AVTR4,
        name: 'Ama Bintu',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas incidunt eaque autem quidem ea ipsam, esse suscipit, neque distinctio sint nulla dolorum, necessitatibus rerum eligendi a voluptatum consectetur vel maxime!'
    },
]

const Testimonials = () => {
    return (
        <section id = 'testimonials'>
            <h5>Review from Clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
            // install Swiper modules 
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}           
            pagination={{ clickable: true }}>
            
                {
                    data.map(({avatar, name, review}, index) => {
                        return (
                            <SwiperSlide key = {index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt="Avatar 1" />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className="client__review">{review}</small>
                            </SwiperSlide>
                        )
                    })
                }                                               
            </Swiper>
        </section>
    )
}

export default Testimonials