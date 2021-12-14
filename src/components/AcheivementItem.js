import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Achievement from '../assets/images/gsc.png';

const AcheivementItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--footer);
    padding: 1rem;
    height: 250px;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function AcheivementItem({
  img = Achievement,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}) {
  return (
    <AcheivementItemStyles>
      <Link to="/projects" className="projectItem__img">
        <div className="project-card-view">
          <img src={img} alt="project img" />
        </div>
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </AcheivementItemStyles>
  );
}
