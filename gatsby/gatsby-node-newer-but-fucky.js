import path from 'path';
import stringToSlug from './src/utils/slugify.js';

async function turnPagesIntoPages({ graphql, actions }) {
  const { data } = await graphql(`
    query {
      navigation: allSanityNavigation {
        nodes {
          title
          order
          page {
            _id
            slug {
              current
            }
          }
          childNav {
            title
            order
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

  // const determineComponentViewByPageId = (id) => {

  // }

  data.navigation.nodes.forEach(async (parentItem) => {
    console.log(`parentNav: ${stringToSlug(parentItem.title)}`);

    // if (parentItem.childNav.length === 0) {
    //   actions.createPage({
    //     component: path.resolve('./src/templates/Page.js'),
    //     path: `/${stringToSlug(parentItem.title)}/`,
    //     context: {
    //       pageTitle: parentItem.title,
    //       slug: parentItem.page.slug.current,
    //       isTeamPage:
    //         parentItem.page._id === 'b0608638-7f4b-47cd-8b2e-a454bf2bb9b3',
    //       isContactUsPage:
    //         parentItem.page._id === 'ce1ee548-4908-460c-aa91-63592d2febc1',
    //     },
    //   });
    // }

    parentItem.childNav.forEach((childNavItem) => {
      // if there are grandchild nav items
      if (childNavItem.grandchildNav.length > 0) {
        // console.log('has links!');
        childNavItem.grandchildNav.forEach((grandchildNavItem) => {
          // console.log(`childnavitem: ${grandchildNav.page.slug.current}`);
          // console.log(
          //   `  grandchildnavitem: ${stringToSlug(
          //     parentItem.title
          //   )}/${stringToSlug(childNavItem.title)}/${
          //     grandchildNav.page.slug.current
          //   }`
          // );

          actions.createPage({
            component: path.resolve('./src/templates/Page.js'),
            path: `/${stringToSlug(parentItem.title)}/${stringToSlug(
              childNavItem.title
            )}/${grandchildNavItem.page.slug.current}`,
            context: {
              pageTitle: grandchildNavItem.title,
              parentTitle: parentItem.title,
              slug: grandchildNavItem.page.slug.current,
              isTeamPage:
                grandchildNavItem.page._id ===
                'b0608638-7f4b-47cd-8b2e-a454bf2bb9b3',
            },
          });
        });

        // if child nav items only, no grandchild nav items
      } else {
        // console.log(
        //   `  childnavitem: ${stringToSlug(parentItem.title)}/${
        //     childNavItem.page.slug.current
        //   }`
        // );

        actions.createPage({
          component: path.resolve('./src/templates/Page.js'),
          path: `/${stringToSlug(parentItem.title)}/${
            childNavItem.page.slug.current
          }`,
          context: {
            pageTitle: childNavItem.title,
            parentTitle: parentItem.title,
            slug: childNavItem.page.slug.current,
            isTeamPage:
              childNavItem.page._id === 'b0608638-7f4b-47cd-8b2e-a454bf2bb9b3',
            isContactUsPage:
              childNavItem.page._id === 'ce1ee548-4908-460c-aa91-63592d2febc1',
          },
        });
      }
    });
  });
}

export async function createPages(params) {
  await Promise.all([turnPagesIntoPages(params)]);
}
