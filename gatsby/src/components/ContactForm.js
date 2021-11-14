import React from 'react';
import styled from 'styled-components';

const ContactFormStyles = styled.form`
  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 3rem;

    @media (min-width: 43.75rem) {
      // 700px
      margin-bottom: 4rem;
    }

    .label {
      display: inline-flex;
      color: var(--cream);
      padding: 0.3rem 1.5rem;
      font-weight: bold;
      background: var(--blue);
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;

      @media (min-width: 43.75rem) {
        // 700px
        padding: 0.5rem 2rem;
      }
    }

    input,
    textarea {
      width: 100%;
      padding: 1rem;
      border: 2px solid var(--blue);
      border-radius: 4px;
      border-top-left-radius: 0;

      &:active,
      &:focus {
        outline: 0;
        border-color: var(--blue);
      }
    }
  }
`;

export default function ContactForm() {
  return (
    <ContactFormStyles>
      <label htmlFor="first-name">
        <div className="label">First name</div>
        <input name="first-name" id="first-name" type="text" />
      </label>
      <label htmlFor="last-name">
        <div className="label">Last name</div>
        <input id="last-name" type="text" />
      </label>
      <label htmlFor="phone-number">
        <div className="label">Phone number</div>
        <input id="phone-number" type="tel" />
      </label>
      <label htmlFor="email-address">
        <div className="label">Email address</div>
        <input id="email-address" type="email" />
      </label>
      <label htmlFor="preferred-times">
        <div className="label">Days and times that work best for you</div>
        <textarea id="preferred-times" />
      </label>
      <button type="submit" className="button">
        Submit
      </button>
    </ContactFormStyles>
  );
}
