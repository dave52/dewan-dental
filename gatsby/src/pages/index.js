/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Layout from '../components/Layout';

export default function HomePage() {
  return (
    <Layout title="welcome">
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Layout>
  );
}
