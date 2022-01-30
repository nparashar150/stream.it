exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const query = await graphql(`
    query getMovieList {
      allPrismicPrefixNamanparashar {
        nodes {
          data {
            movie_title {
              text
            }
          }
        }
      }
    }
  `)

  query.data.allPrismicPrefixNamanparashar.nodes.forEach(edge => {
    actions.createPage({
      path: `/details/${edge.data.movie_title.text}`,
      component: require.resolve(`./src/templates/MovieInfo/MovieInfo.js`),
      context: { name: edge.data.movie_title.text },
    })
  })
}
