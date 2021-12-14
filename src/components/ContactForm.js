import React, { useRef } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import Button from './Button';

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--dark-bg);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default function ContactForm() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_nycfqrn',
        'template_qpe7u0s',
        e.target,
        'user_9OKmueijIAmwaApiyknAf'
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <form form ref={form} onSubmit={sendEmail}>
        <FormStyle>
          <div className="form-group">
            <label htmlFor="name">
              Your Name
              <input type="text" id="name" name="name" />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Your Email
              <input type="email" id="email" name="email" />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="message">
              Your message
              <textarea type="text" id="message" name="message" />
            </label>
          </div>
          <Button type="submit" value="Send" />
        </FormStyle>
      </form>
    </>
  );
}
