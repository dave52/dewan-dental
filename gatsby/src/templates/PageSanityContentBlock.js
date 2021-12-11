import React from 'react';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import urlBuilder from '@sanity/image-url';
import Layout from '../components/Layout';
import ContentSideNav from '../components/ContentSideNav';
import ContentComponent from '../components/ContentComponent';
import BadgeAppointment from '../components/BadgeAppointment';

const urlFor = (source) =>
  urlBuilder({ projectId: 'gtwpuxv0', dataset: 'production' }).image(source);

const serializer = {
  types: {
    // eslint-disable-next-line react/display-name
    blockContentImage: ({ node }) =>
      node.imageUrl ? (
        <a href={node.imageUrl}>
          <img src={urlFor(node.asset)} alt={node.imageCaption} />
        </a>
      ) : (
        <img src={urlFor(node.asset)} alt={node.imageCaption} />
      ),
  },
};

export default function PageSanityContentBlock({ data, pageContext }) {
  return (
    <Layout>
      {pageContext.pageTitle !== pageContext.parentTitle && (
        <ContentSideNav
          nav={data.navigation}
          parentTitle={pageContext.parentTitle}
        />
      )}
      <ContentComponent fullContentStyles>
        <BlockContent blocks={data.page._rawContent} serializers={serializer} />
      </ContentComponent>
      <BadgeAppointment />
    </Layout>
  );
}

export const query = graphql`
  query ($parentTitle: String!, $slug: String!) {
    page: sanityPage(slug: { current: { eq: $slug } }) {
      _rawContent
    }
    navigation: sanityNavigation(title: { eq: $parentTitle }) {
      title
      childNav {
        title
        page {
          title
          slug {
            current
          }
        }
        grandchildNav {
          title
          page {
            title
            slug {
              current
            }
          }
        }
      }
    }
  }
`;
