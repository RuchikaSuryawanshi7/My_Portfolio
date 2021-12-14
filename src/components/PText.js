import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 2.1rem;
  color: #ffffff;
  padding: 10px auto auto;
  line-height: 1.3em;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
    padding-top: 0;
  }
`;

export default function PText({ children }) {
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}
