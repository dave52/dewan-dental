import path from 'path';
import stringToSlug from './src/utils/slugify.js';

async function turnPagesIntoPages({ graphql, actions }) {
  const { data } = await graphql(`
    query {
      navigation: allSanityNavigation {
        nodes {
          parentNav
          subnav {
            title
            links {
              target {
                pageTitle
                slug {
                  current
                }
              }
            }
            target {
              pageTitle
              slug {
                current
              }
            }
          }
        }
      }
    }
  `);

  // const { data } = await graphql(`
  //   query {
  //     pages: allSanityPage {
  //       nodes {
  //         pageTitle
  //         slug {
  //           current
  //         }
  //         navigation {
  //           parentNav
  //         }
  //       }
  //     }
  //   }
  // `);

  // console.log(data.pages.nodes);

  data.navigation.nodes.forEach(async (item) => {
    // console.log(stringToSlug(page.navigation.parentNav));
    console.log(`parentNav: ${item.parentNav}`);

    item.subnav.forEach((subnav) => {
      if (subnav.links.length > 0) {
        console.log('has links!');
        subnav.links.forEach((link) => {
          console.log(`childnavitem: ${link.target.slug.current}`);
          console.log(
            `  childnavitem: ${item.parentNav}/${subnav.title}/${link.target.slug.current}`
          );
        });
      } else {
        console.log(
          `  navitem: ${item.parentNav}/${subnav.target.slug.current}`
        );
      }
    });

    //   const { subnavLink } = await graphql(`
    //   query {
    //     navigation: sanityNavigation(parentNav: {}) {
    //       nodes {
    //         pageTitle
    //         slug {
    //           current
    //         }
    //         navigation {
    //           parentNav
    //         }
    //       }
    //     }
    //   }
    // `);

    // if (navigation.subnav.links > 0) {
    //   navigation.subnav.links
    // }

    // const { navigation } = await graphql(`query navigation: sanityNavigation(subnav: {elemMatch: {links: {elemMatch: {target: {pageTitle: { eq: "Dentist Office Location"}}}}}})`);
    // if (navigation: sanityNavigation(subnav: {elemMatch: {links: {elemMatch: {target: {pageTitle: { eq: "Dentist Office Location"}}}}}}))
    // the above query returns data.navigation = null if nothing is found if it is found it returns data.navigation.id (with a unique id)

    // navigation: sanityNavigation(subnav: {elemMatch: {links: {elemMatch: {target: {pageTitle: { eq: "Dentist Office Location"}}}}}}) {
    //   subnav {
    //     title
    //     links {
    //       title
    //       target {
    //         pageTitle
    //       }
    //     }
    //   }
    // }

    // actions.createPage({
    //   component: path.resolve('./src/components/Page.js'),
    //   path: `/${stringToSlug(page.navigation.parentNav)}/${page.slug.current}`,
    //   context: {
    //     name: page.pageTitle,
    //     navigation: page.navigation.parentNav,
    //   },
    // });
  });

  // 3. figure out how many pages there are based on how many slicemasters there are, an dhow many per page
  //   const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  //   const pageCount = Math.ceil(data.slicemasters.totalCount / pageSize);
  //   console.log(
  //     `There are ${data.slicemasters.totalCount} and we have ${pageCount} pages with ${pageSize} per page`
  //   );
  //   // 4. loop from 1 to n and create the pages for them
  //   // Array.from({ length: pageCount }).forEach(_, i) => console.log(i);
  //   Array.from({ length: pageCount }).forEach((_, i) => {
  //     console.log(`Creating page ${i}`);
  //     actions.createPage({
  //       path: `/slicemasters/${i + 1}`,
  //       component: path.resolve('./src/pages/slicemasters.js'),
  //       // this data is passed to the template when we create it
  //       context: {
  //         skip: i * pageSize,
  //         currentPage: i + 1,
  //         pageSize,
  //       },
  //     });
  //   });
}

export async function createPages(params) {
  await Promise.all([turnPagesIntoPages(params)]);
}
