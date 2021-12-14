import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Ruchika Suryawanshi</span>
              </p>
              <h2 className="about__heading">Sophomore</h2>
              <div className="about__info">
                <PText>
                  An enthusiastic individual who enjoys learning and
                  experimenting with new fields and technology. I'm an
                  meritocratic with a creative mind and a compassionate heart
                  that is motivated to achieving my goals.
                  <br /> <br />
                  Since my SSC 10 th Summer Breaks, I have been coding.For me,
                  coding is an art.It 's fantastic, and now I get to plan as
                  well as code. It' s fascinating to me, and I 've had a lot of
                  fun with it.
                  <br />
                  <br />I fight for my rights and myself, as well as supporting
                  and motivating others to do the same.I 'm not a pessimist who
                  sees the worst in everything; instead, I' m an optimist who
                  looks for answers and ways out of difficult situations.
                </PText>
              </div>
              <Button btnText="Contact me" btnLink="/contact" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={[
                  'HTML',
                  'CSS',
                  'Flutter',
                  'Bootstrap',
                  'REACT.js',
                  'JavaScript',
                ]}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['PHP', 'Python', 'Firebase', 'Node']}
              />
              <AboutInfoItem
                title="Design"
                items={['AdobeXD', 'Canva', 'Figma', 'Photoshop']}
              />
              <AboutInfoItem
                title="Others"
                items={['Machine Learning', 'Google Cloud', 'Tensorflow']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="Xperts (2021)"
                items={['Strategic Marketing Intern']}
              />
              <AboutInfoItem
                title="ExpertPLM Technologies (2019)"
                items={['Python Developer Intern']}
              />
              <AboutInfoItem
                title="Kode-IT Solutions (2019)"
                items={['Web Developer Intern']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="B.Tech (2021 - Pursuing)"
                items={['Cummins College Of Engineering, Pune']}
              />
              <AboutInfoItem
                title="Diploma  (2018-2021)"
                items={['Cusrow Wadia Institute Of Technology']}
              />
              <AboutInfoItem
                title="School (2018)"
                items={['SA Mission English Medium School']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
