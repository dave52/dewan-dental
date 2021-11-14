import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../../templates/Layout';
import PageFullWidth from '../../templates/PageFullWidth';

const TestimonialsPageStyles = styled.div``;

export default function TestimonialsPage() {
  return (
    <Layout>
      <PageFullWidth>
        <TestimonialsPageStyles>
          <h1>Testimonials</h1>
        </TestimonialsPageStyles>
      </PageFullWidth>
    </Layout>
  );
}
