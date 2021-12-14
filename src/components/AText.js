import React from 'react';
import styled from 'styled-components';

const AStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 2.1rem;
  color: #ffffff;
  background-color: bisque;
  padding: 10px auto auto;
  line-height: 1.3em;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
    padding-top: 0;
  }
`;

export default function AText({ children }) {
  return (
    <AStyle className="para">
      <p>{children}</p>
    </AStyle>
  );
}
