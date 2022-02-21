import React from 'react';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import ContentSideNav from '../components/ContentSideNav';
import ContentComponent from '../components/ContentComponent';
import BadgeAppointment from '../components/BadgeAppointment';
import serializer from '../utils/serializer';

export default function PageSanityContentBlock({
  data,
  pageContext,
  location,
}) {
  return (
    <Layout title={pageContext.pageTitle}>
      {pageContext.pageTitle !== pageContext.parentTitle && (
        <ContentSideNav
          location={location}
          nav={data.navigation}
          parentTitle={pageContext.parentTitle}
        />
      )}
      <ContentComponent
        fullContentStyles
        contentWide={data.page.hasContentImage}
      >
        <h1 className="content-heading">{data.page.title}</h1>
        <div className="content-block">
          <BlockContent
            blocks={data.page._rawContent}
            serializers={serializer(data)}
          />
        </div>
        {data.page.hasContentImage && (
          <GatsbyImage
            image={data.page.contentImage.asset.gatsbyImageData}
            className="content-image"
            quality={100}
            alt={data.page.contentImageAlt}
          />
        )}
      </ContentComponent>
      <BadgeAppointment />
    </Layout>
  );
}

export const query = graphql`
  query ($parentTitle: String!, $slug: String!) {
    page: sanityPage(slug: { current: { eq: $slug } }) {
      _rawContent
      title
      hasContentImage
      contentImage {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      contentImageMaxWidth
      contentImageAlt
    }
    allPages: allSanityPage {
      nodes {
        _id
        title
        slug {
          current
        }
        navigation {
          title
          childNav {
            title
            grandchildNav {
              title
            }
          }
        }
      }
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
