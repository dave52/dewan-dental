import React from 'react';
import { graphql, Link } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import urlBuilder from '@sanity/image-url';
import Layout from '../components/Layout';
import ContentSideNav from '../components/ContentSideNav';
import ContentComponent from '../components/ContentComponent';
import BadgeAppointment from '../components/BadgeAppointment';
import stringToSlug from '../utils/slugify';

export default function PageSanityContentBlock({
  data,
  pageContext,
  location,
}) {
  const urlFor = (source) =>
    urlBuilder({ projectId: 'gtwpuxv0', dataset: 'production' }).image(source);

  const serializer = {
    types: {
      blockContentImage: ({ node }) =>
        node.imageUrl ? (
          <a href={node.imageUrl}>
            <img src={urlFor(node.asset)} alt={node.imageCaption} />
          </a>
        ) : (
          <img src={urlFor(node.asset)} alt={node.imageCaption} />
        ),
    },
    marks: {
      internalLink: ({ mark, children }) => {
        const ref = mark.reference._ref;
        const [pageRef] = data.allPages.nodes.filter((obj) => obj._id === ref);
        let path = `/${stringToSlug(pageRef?.navigation?.title)}`;
        pageRef.navigation.childNav.forEach((child) => {
          child.grandchildNav.forEach((grandchild) => {
            if (grandchild.title === pageRef.title) {
              path += `/${stringToSlug(child.title)}/${stringToSlug(
                grandchild.title
              )}`;
            }
          });
          if (child.title === pageRef.title) {
            path += `/${stringToSlug(child.title)}`;
          }
        });
        return (
          <Link to={path} key={path}>
            {children}
          </Link>
        );
      },
    },
  };

  return (
    <Layout title={pageContext.pageTitle}>
      {pageContext.pageTitle !== pageContext.parentTitle && (
        <ContentSideNav
          location={location}
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
