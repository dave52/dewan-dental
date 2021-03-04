import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

export default function TopHat({
  children,
  location,
  description,
  title,
  image,
}) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  return (
    <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
      {/* weird to see self close HTML tag but do this to specify lang */}
      <html lang="en" />
      <title>{title}</title>
      {/* fav icons */}
      <link ref="icon" type="image/svg+xml" href="/favicon.svg" />
      <link ref="alternate icon" href="/favicon.ico" />
      {/* meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={site.siteMetadata.description} />
      {/* open graph, spec for social media info etc */}
      {location && <meta property="og:url" content={location.href} />}
      <meta propety="og:image" content={image || '/logo.svg'} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        property="og:site_name"
        content={site.siteMetadata.title}
        key="ogsitename"
      />
      <meta property="og:description" content={description} key="ogdesc" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,500;0,600;1,700&display=swap"
        rel="stylesheet"
      />
      {children}
    </Helmet>
  );
}
