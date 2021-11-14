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

  const determineComponentBasedOnPageId = (id) => {
    const val = id || '';
    switch (val) {
      // _id for request a dentist appointment
      // case '2b3048e1-41af-4bfa-859e-98b4ccab7907':
      //   // TODO: fix dis shit
      //   return path.resolve(
      //     './src/components/Pages/PageRequestADentistAppointment.js'
      //   );
      default:
        return path.resolve('./src/templates/Page.js');
    }
  };

  data.navigation.nodes.forEach(async (parentItem) => {
    console.log(`parentNav: ${stringToSlug(parentItem.title)}`);

    // const buildPagesIfHasChildren = (item) => {
    //   let children;

    //   if (item.childNav) {
    //   }
    // };

    if (parentItem.childNav.length === 0) {
      // console.log('parentItem');
      // console.log(parentItem);
      actions.createPage({
        component: determineComponentBasedOnPageId(parentItem.page._id),
        path: `${parentItem.page.slug.current}`,
        context: {
          pageTitle: parentItem.title,
          parentTitle: parentItem.title,
          slug: parentItem.page.slug.current,
          fullWidth: true,
          isTeamPage:
            parentItem.page._id === 'b0608638-7f4b-47cd-8b2e-a454bf2bb9b3',
        },
      });
    }

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
            component: determineComponentBasedOnPageId(
              grandchildNavItem.page._id
            ),
            path: `/${stringToSlug(parentItem.title)}/${stringToSlug(
              childNavItem.title
            )}/${grandchildNavItem.page.slug.current}`,
            context: {
              pageTitle: grandchildNavItem.title,
              parentTitle: parentItem.title,
              slug: grandchildNavItem.page.slug.current,
              fullWidth: false,
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
          component: determineComponentBasedOnPageId(childNavItem.page._id),
          path: `/${stringToSlug(parentItem.title)}/${
            childNavItem.page.slug.current
          }`,
          context: {
            pageTitle: childNavItem.title,
            parentTitle: parentItem.title,
            slug: childNavItem.page.slug.current,
            fullWidth: false,
            isTeamPage:
              childNavItem.page._id === 'b0608638-7f4b-47cd-8b2e-a454bf2bb9b3',
          },
        });
      }
    });
  });
}

export async function createPages(params) {
  await Promise.all([turnPagesIntoPages(params)]);
}
