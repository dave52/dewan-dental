import React from 'react';
import { graphql, Link } from 'gatsby';

export default function SanityInternalLinks({ pageId, children }) {
  const { page } = graphql`
    query ($pageId: String!) {
      sanityPage(_id: { eq: $pageId }) {
        slug {
          current
        }
        navigation {
          title
        }
      }
    }
  `;

  console.log('page');
  console.log(page);

  const slug = `/${pageId}`;

  return (
    <Link to={slug} key={slug}>
      {children}
    </Link>
  );
}
