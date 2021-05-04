import dotenv from 'dotenv';

dotenv.config({ path: '.env' });
// to test it
// console.log(process.env.SANITY_TOKEN);

export default {
  siteMetadata: {
    title: `Dewan Dental`,
    siteUrl: 'https://www.dewandental.com',
    description: 'DeWan Dental Wellness, Milwaukee, WI',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      // this is the name of the plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'gtwpuxv0',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
