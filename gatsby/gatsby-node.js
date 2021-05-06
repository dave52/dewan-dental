import path from 'path';
import stringToSlug from './src/utils/slugify.js';

async function turnPagesIntoPages({ graphql, actions }) {
  const { data } = await graphql(`
    query {
      navigation: allSanityNavigation {
        nodes {
          title
          childNav {
            title
            order
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

  // data.navigation.nodes.forEach(async (parentItem) => {
    console.log(`parentNav: ${stringToSlug(parentItem.title)}`);

    parentItem.childNav.forEach((childNavItem) => {
      // if there are grandchild nav items
      if (childNavItem.grandchildNav.length > 0) {
        // console.log('has links!');
        childNavItem.grandchildNav.forEach((grandchildNav) => {
          // console.log(`childnavitem: ${grandchildNav.page.slug.current}`);
          // console.log(
          //   `  grandchildnavitem: ${stringToSlug(
          //     parentItem.title
          //   )}/${stringToSlug(childNavItem.title)}/${
          //     grandchildNav.page.slug.current
          //   }`
          // );

          actions.createPage({
            component: path.resolve('./src/components/Page.js'),
            path: `/${stringToSlug(parentItem.title)}/${stringToSlug(
              childNavItem.title
            )}/${grandchildNav.page.slug.current}`,
            context: {
              navigation: parentItem.title,
              slug: grandchildNav.page.slug.current,
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
          component: path.resolve('./src/components/Page.js'),
          path: `/${stringToSlug(parentItem.title)}/${
            childNavItem.page.slug.current
          }`,
          context: {
            navigation: parentItem.title,
            slug: childNavItem.page.slug.current,
          },
        });
      }
    });
  });
}

export async function createPages(params) {
  await Promise.all([turnPagesIntoPages(params)]);
}
