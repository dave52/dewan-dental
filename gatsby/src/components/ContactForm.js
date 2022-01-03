import React from 'react';
import styled from 'styled-components';

const ContactFormStyles = styled.div`
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

  .no-show {
    display: none;
  }
`;

export default function ContactForm({ formName, textAreaLabel, textAreaName }) {
  return (
    <ContactFormStyles>
      <form
        name={formName}
        method="POST"
        data-netlify="true"
        // netlify-honeypot="butter-field"
        // data-netlify-recaptcha="true"
        action="/submission-success"
      >
        <div className="no-show">
          <label htmlFor="butter-field">
            <div>day bow bow, oh yeahhhh</div>
            <input name="butter-field" />
          </label>
        </div>
        <label htmlFor="first-name">
          <div className="label">First name</div>
          <input name="first-name" id="first-name" type="text" required />
        </label>
        <label htmlFor="last-name">
          <div className="label">Last name</div>
          <input id="last-name" type="text" required />
        </label>
        <label htmlFor="phone-number">
          <div className="label">Phone number</div>
          <input id="phone-number" type="tel" required />
        </label>
        <label htmlFor="email-address">
          <div className="label">Email address</div>
          <input id="email-address" type="email" required />
        </label>
        <label htmlFor={textAreaName ?? 'any-additional-information'}>
          <div className="label">
            {textAreaLabel ?? 'Any additional information'}
          </div>
          <textarea id={textAreaName ?? 'any-additional-information'} />
        </label>
        <div data-netlify-recaptcha="true" />
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </ContactFormStyles>
  );
}
