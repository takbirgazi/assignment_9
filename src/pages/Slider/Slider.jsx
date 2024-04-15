import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Slider.css';
import { Navigation } from 'swiper/modules';
import silder1 from "../../assets/images/slider1.jpg";
import silder2 from "../../assets/images/slider2.jpg";
import silder3 from "../../assets/images/slider3.jpg";
import silder4 from "../../assets/images/slider4.jpg";

export default function Slider() {
  return (
    <div className="h-[400px]">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src={silder1} /></SwiperSlide>
        <SwiperSlide><img src={silder2} /></SwiperSlide>
        <SwiperSlide><img src={silder3} /></SwiperSlide>
        <SwiperSlide><img src={silder4} /></SwiperSlide>
      </Swiper>
    </div>
  );
}
