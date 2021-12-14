import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import styled from 'styled-components';

const FooterStyle = styled.div`
  .footer {
    background-color: var(--footer);
    bottom: 0 !important;
    padding-top: 10px !important;
    padding-bottom: 8px !important ;
  }
  .footer-copywright {
    text-align: center !important;
  }
  .social-icons {
    display: inline-block !important;
    padding-right: 15px;
    padding-left: 15px;
    width: 60px !important;
    height: 60px !important;
  }

  .footer-body {
    text-align: center !important;
  }

  @media (max-width: 767px) {
    .footer-copywright {
      text-align: center !important;
    }

    .footer-body {
      text-align: center !important;
    }
  }

  .footer h3 {
    font-size: 2em;
    color: white !important;
    margin-top: 0.5em !important;
    margin-bottom: 0.5em !important;
  }
  .footer h4 {
    font-size: 1.6em;
    color: white !important;
    margin-top: 0.5em !important;
    margin-bottom: 0.5em !important;
  }
  .footer-icons {
    margin-top: 0.5em !important;
    margin-bottom: 0.5em !important;
    padding: 0 !important;
  }

  .blockquote-footer {
    color: #a588c0 !important;
  }
`;

function Footerr() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <FooterStyle>
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <h3>Made with ❤ CS-Jack</h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h4>Copyright © {year}</h4>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/RuchikaSuryawanshi7"
                  style={{ color: 'white' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/RuchikaSuryawa4"
                  style={{ color: 'white' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ruchika-suryawanshi/"
                  style={{ color: 'white' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/danzatrice7/"
                  style={{ color: 'white' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </FooterStyle>
  );
}

export default Footerr;
