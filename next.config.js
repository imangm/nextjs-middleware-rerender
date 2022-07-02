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
  // trailingSlash: true,
  async redirects() {
    const wpRedirects = await getWPRedirects();
    return wpRedirects;
  }
};
