import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

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

const ContactUs = () => {
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
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <FormStyle>
        <h5>Name</h5>
        <input type="text" name="user_name" />
        <h5>Email</h5>
        <input type="email" name="user_email" />
        <h5>Message</h5>
        <textarea name="message" />
        <button type="submit" value="Send">
          Send
        </button>
      </FormStyle>
    </form>
  );
};

export default ContactUs;
