import BlockContent from '@sanity/block-content-to-react';
import urlBuilder from '@sanity/image-url';
import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import sortNullishByProperty from '../utils/sortNullishByProperty';
import Layout from './Layout';
import LayoutSideNav from './LayoutSideNav';
import SideNav from './SideNav';

const PageLayoutStyles = styled.div`
  background: green;
  color: #fff;
`;

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

export default function Page({ data, pageContext }) {
  return (
    <Layout>
      <LayoutSideNav>
        <SideNav>
          <h3>{data.navigation.title}</h3>
          <ul>
            {data.navigation.childNav
              .sort(sortNullishByProperty('order'))
              .map((childNavItem) => (
                <li key={childNavItem.title}>
                  {childNavItem.title}
                  {childNavItem.grandchildNav && (
                    <ul>
                      {childNavItem.grandchildNav
                        .sort(sortNullishByProperty('order'))
                        .map((grandchildNavItem) => (
                          <li key={childNavItem.title}>
                            {grandchildNavItem.title}
                          </li>
                        ))}
                    </ul>
                  )}
                </li>
              ))}
          </ul>
        </SideNav>
        <PageLayoutStyles>
          <h1>{data.page.title}</h1>
          <BlockContent
            blocks={data.page._rawContent}
            serializers={serializer}
          />
        </PageLayoutStyles>
      </LayoutSideNav>
    </Layout>
  );
}

export const query = graphql`
  query($navigation: String!, $slug: String!) {
    page: sanityPage(slug: { current: { eq: $slug } }) {
      _rawContent
    }
    navigation: sanityNavigation(title: { eq: $navigation }) {
      title
      childNav {
        title
        order
        page {
          title
          slug {
            current
          }
        }
        grandchildNav {
          title
          order
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
