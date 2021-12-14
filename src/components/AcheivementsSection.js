import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import AcheivementItem from './AcheivementItem';
import SectionTitle from './SectionTitle';
import 'swiper/swiper-bundle.min.css';
import achivement from '../assets/data/achievement';

// install Swiper modules
SwiperCore.use([Navigation]);

const AcheivementSectionStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .project-card-view {
    color: white !important;
    background-color: transparent !important;
    opacity: 0.9 !important;
    transition: all 0.5s ease 0s !important;
    height: 100% !important;
  }
  .project-card-view:hover {
    transform: scale(1.12) !important;
    overflow: hidden !important;
  }
  .swiper-container {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background: var(--deep-dark);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
      .projectItem__img {
        width: 100%;
      }
    }
  }
`;

export default function AcheivementsSection() {
  // console.log(projects);
  return (
    <AcheivementSectionStyle>
      <div className="container">
        <SectionTitle
          subheading="some of my recent Acheivement"
          heading="Achievements"
        />
        <div className="projects__allItems">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {achivement.map((project, index) => {
              if (index >= 9) return;
              return (
                <SwiperSlide key={project.id}>
                  <AcheivementItem
                    title={project.name}
                    img={project.img}
                    desc={project.desc}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </AcheivementSectionStyle>
  );
}
