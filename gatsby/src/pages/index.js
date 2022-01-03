/* eslint-disable react/button-has-type */
import React from 'react';
import Layout from '../components/Layout';

export default function HomePage() {
  return (
    <Layout title="welcome">
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input name="text-name" placeholder="Your Name" type="text" />
        <button>Send</button>
      </form>
    </Layout>
  );
}
