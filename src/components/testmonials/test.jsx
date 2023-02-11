import React from 'react';
import ReactDOM from 'react-dom';
import './test.css'
import Image1 from '../../assets/avatar-1.svg';
import Image2 from '../../assets/avatar-3.svg';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';

const data = [
  {
    id: 1,
    image: Image1,
    title: "Basem Abuzaid",
    subtitle: "Freelance-webdesigner",
    comment:
      "I enjoy working with the them and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    image: Image2,
    title: "Basem-Abuzaid",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the them and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
  },
];


const test = () => {

  return (
    <div className="section testimonials container section">
      <h2 className="section-title">Clients & Reviews</h2>



      <Swiper className="testimonials-container grid"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}

        pagination={{ clickable: true }}
        loop={true}
        grabCursor={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonials-item">
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonials-title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>




    </div>
  )

}

export default test