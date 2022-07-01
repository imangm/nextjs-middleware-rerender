// const { GraphQLClient } = require("graphql-request");

// const graphqlRequest = async (query, variables = {}) => {
//   const graphQuery = new GraphQLClient(process.env.CMS_ENDPOINT, {
//     headers: {
//       authorization: `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
//     }
//   });

//   const pagesData = await graphQuery.request(query, variables);

//   return pagesData;
// };

async function getWPRedirects() {
  const redirects = [
    {
      source: "/company/blog",
      destination: "/blog",
      permanent: true,
      basePath: false
    },
    {
      source: "/products/test",
      destination: "/",
      permanent: true,
      basePath: false
    }
  ];

  return redirects;
}

module.exports = {
  // images: {
  // domains: [process.env.IMAGE_DOMAIN]
  // minimumCacheTTL: 2592000,
  // },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test(".svg")
    );
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve("@svgr/webpack")
    });
    return config;
  },
  async redirects() {
    const wpRedirects = await getWPRedirects();
    return wpRedirects;
  }
};
