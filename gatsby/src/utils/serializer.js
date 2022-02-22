import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import stringToSlug from './slugify';
import ConditionalWrapper from '../components/ConditionalWrapper';

const serializer = (data) => ({
  types: {
    blockContentImage: ({ node }) => (
      <ConditionalWrapper
        condition={!!node.imageUrl}
        wrapper={(children) => (
          <a className="no-underscore" href={node.imageUrl}>
            {children}
          </a>
        )}
      >
        <>
          <GatsbyImage
            quality={90}
            image={getGatsbyImageData(
              node.asset,
              { placeholder: 'blurred' },
              { projectId: 'gtwpuxv0', dataset: 'production' }
            )}
            alt={node.imageCaption}
          />
        </>
      </ConditionalWrapper>
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
});

export default serializer;
