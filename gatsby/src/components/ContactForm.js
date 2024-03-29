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
`;

export default function ContactForm({ formName, textAreaLabel, textAreaName }) {
  return (
    <ContactFormStyles>
      <form
        name={formName}
        method="POST"
        data-netlify="true"
        action="/submission-success"
      >
        <input type="hidden" name="form-name" value={formName} />
        <label htmlFor="patient-name">
          <div className="label">First & last name</div>
          <input
            name="patient-name"
            id="patient-name"
            type="text"
            placeholder="i.e. Eleanor Rigby"
            required
          />
        </label>
        <label htmlFor="phone-number">
          <div className="label">Phone number</div>
          <input
            name="phone-number"
            id="phone-number"
            type="tel"
            placeholder="i.e. 414-221-3809"
            required
          />
        </label>
        <label htmlFor="email-address">
          <div className="label">Email address</div>
          <input
            name="email-address"
            id="email-address"
            type="email"
            placeholder="i.e. smile@gmail.com"
            required
          />
        </label>
        <label htmlFor={textAreaName ?? 'any-additional-information'}>
          <div className="label">
            {textAreaLabel ?? 'Any additional information'}
          </div>
          <textarea
            name={textAreaName ?? 'any-additional-information'}
            id={textAreaName ?? 'any-additional-information'}
            placeholder="Drop us a note :)..."
          />
        </label>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </ContactFormStyles>
  );
}
