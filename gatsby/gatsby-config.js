import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Slicks Slices`,
    siteUrl: `https://gatsby.pizza`,
    description: `Best pizza in Maui`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // name of  the plugin you are  adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'k0q8gy9q',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
