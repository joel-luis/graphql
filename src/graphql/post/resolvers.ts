const post = async (_, { postId }, { dataSources }) => {
  const post = dataSources.postApi.getPost(postId)
  return post
}

const posts = async (_, { input }, { dataSources }) => {
  const posts = dataSources.postApi.getPosts(input)
  return posts
}

const user = async ({ userId }, _, { dataSources }) => {
  const user = await dataSources.userApi.getUser(userId)
  return user
}

export const postResolvers = {
  Query: {
    post,
    posts,
  },
  Post: {
    user,
  },
}
