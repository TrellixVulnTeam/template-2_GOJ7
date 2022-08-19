import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import brandData from "./brandData";
import BrandItem from "./BrandItem";
import logo1 from "../../assets/img/brand/homeadvisor.png";
import logo2 from "../../assets/img/brand/tw.png";
import logo3 from "../../assets/img/brand/fb.png";
import gmb from "../../assets/img/brand/gmb.png";

function BrandCarousel() {
  return (
    <div className="brand-wrapper section-bg mb-0 pt-100 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-4 col-lg-4"></div>
          <div className="col-4 col-lg-4">
          <a
                    href="https://g.page/r/CQ22Wi-_WYKsEAg/review"
                    target="_blank"
                  ><img src={gmb} alt="" /></a>
          </div>
          <div className="col-4 col-lg-4"></div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-12">
            <div className="brand-logo-grid">
              <Swiper slidesPerView="3" loop>
                <SwiperSlide>
                  <a
                    href="https://www.homeadvisor.com/rated.JCconcreteandPumping.63352631.html"
                    target="_blank"
                  >
                    {" "}
                    <BrandItem brandLogo={logo1} />
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    href="https://www.facebook.com/j.concretepumping/"
                    target="_blank"
                  >
                    {" "}
                    <BrandItem brandLogo={logo3} />
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="https://twitter.com/JcPumping" target="_blank">
                    <BrandItem brandLogo={logo2} />
                  </a>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandCarousel;
