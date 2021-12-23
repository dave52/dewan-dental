import path from 'path';
import stringToSlug from './src/utils/slugify.js';

async function turnPagesIntoPages({ graphql, actions }) {
  const { data } = await graphql(`
    query {
      navigation: allSanityNavigation {
        nodes {
          order
          title
          page {
            _id
            slug {
              current
            }
          }
          childNav {
            title
            page {
              _id
              slug {
                current
              }
            }
            grandchildNav {
              title
              page {
                _id
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

  function determineComponentBasedOnPageId(id) {
    function returnPathToPage(templateComponentName) {
      return path.resolve(`./src/templates/${templateComponentName}`);
    }

    switch (id) {
      case '8ad9d1a3-0677-40f6-8946-4a70674497db':
        return returnPathToPage('PageContactUs.js');
      case '15f0b9b2-744b-475f-8632-1a5fd73bce6f':
        return returnPathToPage('PageLocationAndHours.js');
      case '54379e6f-01c8-4fc1-80c1-80ada4f1f1f6':
        return returnPathToPage('PageOurCommunity.js');
      case '2b3048e1-41af-4bfa-859e-98b4ccab7907':
        return returnPathToPage('PageRequestADentistAppointment.js');
      case 'b0608638-7f4b-47cd-8b2e-a454bf2bb9b3':
        return returnPathToPage('PageTeamBios.js');
      case 'f356728a-ac42-4971-8d0e-7a158b7edea9':
        return returnPathToPage('PageTestimonials.js');
      default:
        return returnPathToPage('PageSanityContentBlock.js');
    }
  }

  data.navigation.nodes.forEach(async (parentItem) => {
    if (parentItem.childNav.length === 0) {
      const pageId = parentItem.page._id || '';

      actions.createPage({
        component: determineComponentBasedOnPageId(pageId),
        path: `${parentItem.page.slug.current}`,
        context: {
          pageTitle: parentItem.title,
          parentTitle: parentItem.title,
          slug: parentItem.page.slug.current,
          id: parentItem.page._id,
        },
      });
    }

    parentItem.childNav.forEach((childNavItem) => {
      // if there are grandchild nav items
      if (childNavItem.grandchildNav.length > 0) {
        childNavItem.grandchildNav.forEach((grandchildNavItem) => {
          const pageId = grandchildNavItem.page._id || '';

          actions.createPage({
            component: determineComponentBasedOnPageId(pageId),
            path: `/${stringToSlug(parentItem.title)}/${stringToSlug(
              childNavItem.title
            )}/${grandchildNavItem.page.slug.current}`,
            context: {
              pageTitle: grandchildNavItem.title,
              parentTitle: parentItem.title,
              slug: grandchildNavItem.page.slug.current,
              id: grandchildNavItem.page._id,
            },
          });
        });

        // if child nav items only, no grandchild nav items
      } else {
        const pageId = childNavItem.page._id || '';

        actions.createPage({
          component: determineComponentBasedOnPageId(pageId),
          path: `/${stringToSlug(parentItem.title)}/${
            childNavItem.page.slug.current
          }`,
          context: {
            pageTitle: childNavItem.title,
            parentTitle: parentItem.title,
            slug: childNavItem.page.slug.current,
            id: childNavItem.page._id,
          },
        });
      }
    });
  });
}

export async function createPages(params) {
  await Promise.all([turnPagesIntoPages(params)]);
}
