import React, { useState } from 'react';
import styled from 'styled-components';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import PText from './PText';
import SectionTitle from './SectionTitle';
import extraActivity from '../assets/data/extraActivity';

const ExtraActivitySectionStyles = styled.div`
  overflow-x: hidden;
  padding: 10rem 0;
  text-align: center;
  .testimonial__wrapper {
    position: relative;
    max-width: 700px;
    margin: 0 auto;
  }
  .testimonial__info {
    width: 100%;
    height: fit-content;
    padding: 3rem;
    background-color: var(--dark-bg);
    border-radius: 12px;
    margin-top: 1rem;
  }
  .testimonial__desc {
    .para {
      margin-top: 2rem;
      text-align: center;
    }
  }
  .testimonial__name {
    margin-top: 0;
    font-family: 'Montserrat Bold';
    font-size: 2.2rem;
  }
  .testimonial__title {
    font-size: 1.6rem;
    margin-top: 0.8rem;
  }
  .arrows {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 30px;
      pointer-events: none;
    }
    .next,
    .prev {
      margin: 0 0.5rem;
      width: fit-content;
      background-color: var(--dark-bg);
      padding: 0.5rem 2rem;
      border-radius: 8px;
      cursor: pointer;
    }
  }
  .fade-enter {
    opacity: 0;
    transform: scale(0.96);
    z-index: 1;
  }
  .fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: 250ms ease-in;
    transition-property: transform, opacity;
    z-index: 1;
  }
  .fade-exit {
    transform: scale(1);
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transform: scale(0.96);
    transition: 200ms ease-in;
    transition-property: transform, opacity;
  }
`;

export default function ExtraActivitySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = extraActivity[activeIndex];

  function handleNext() {
    if (activeIndex >= extraActivity.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((oldIndex) => oldIndex + 1);
    }
  }
  function handlePrev() {
    if (activeIndex === 0) {
      setActiveIndex(extraActivity.length - 1);
    } else {
      setActiveIndex((oldIndex) => oldIndex - 1);
    }
  }

  return (
    <ExtraActivitySectionStyles>
      <div className="container">
        <SectionTitle
          subheading="Extra Curicular  I'm Involved in Other than College"
          heading="Activities"
        />
        <div className="testimonial__wrapper">
          <SwitchTransition component={null}>
            <CSSTransition key={activeSlide.id} timeout={300} classNames="fade">
              <div className="testimonial__info">
                <h2 className="testimonial__name">{activeSlide.name}</h2>
                <div className="testimonial__desc">
                  <PText>{activeSlide.desc}</PText>
                </div>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>

        <div className="arrows">
          <div
            className="prev"
            onClick={handlePrev}
            role="button"
            tabIndex={0}
            onKeyDown={handlePrev}
          >
            <MdArrowBack />
          </div>
          <div
            className="next"
            onClick={handleNext}
            role="button"
            tabIndex={0}
            onKeyDown={handleNext}
          >
            <MdArrowForward />
          </div>
        </div>
      </div>
    </ExtraActivitySectionStyles>
  );
}
