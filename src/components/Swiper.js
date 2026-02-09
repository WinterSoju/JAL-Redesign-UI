import { Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Swiper.css';

export default () => {
  return (
    <div style={{ marginBottom: '5rem' }}>
      <Swiper
          className='swiper-container'
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={1}
          centeredSlides={false}
          slidesPerView= {3}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }} 
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <img src="images/tokyo.jpg" alt="Slide 1" />
          <div className="swiper-slide-title">Tokyo - The Heart of Japan<br />Economy<br /> | From SGD 700</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/osaka.jpg" alt="Slide 2" />
          <div className="swiper-slide-title">Osaka - The Kitchen of Japan<br />Economy<br /> | From SGD 400</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/kyoto.jpg" alt="Slide 3" />
          <div className="swiper-slide-title">Kyoto - The Cultural Capital<br />Economy<br /> | From SGD 500</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/hokaido.jpg" alt="Slide 4" />
          <div className="swiper-slide-title">Hokkaido - Nature's Paradise<br />Economy<br /> | From SGD 500</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};