import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';
import './Nav.css';

export default function Nav() {
  const { nav } = useStaticQuery(graphql`
    query {
      nav: allSanityNavigation {
        nodes {
          title
          order
          page {
            slug {
              current
            }
          }
          childNav {
            title
            page {
              slug {
                current
              }
            }
            grandchildNav {
              page {
                slug {
                  current
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <NavMobile data={{ nav }} />
      <NavDesktop data={{ nav }} />
    </>
  );
}
