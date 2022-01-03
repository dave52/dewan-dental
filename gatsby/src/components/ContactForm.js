/* eslint-disable jsx-a11y/label-has-associated-control */
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
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Your Role:{' '}
            <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </ContactFormStyles>
  );
}
