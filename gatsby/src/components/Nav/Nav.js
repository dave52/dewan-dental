import React from 'react';
import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';
import './Nav.css';
import { graphql, useStaticQuery } from 'gatsby';

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
            order
            page {
              slug {
                current
              }
            }
            grandchildNav {
              order
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
