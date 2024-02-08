const user = async (_, { id }, { dataSources }) => {
  const user = await dataSources.userApi.getUser(id)
  return user
}

const users = async (_, { input }, { dataSources }) => {
  const apiFiltersInput = new URLSearchParams(input)
  const users = await dataSources.userApi.getUsers(apiFiltersInput)
  return users
}

const posts = ({ id }, _, { dataSources }) => {
  return dataSources.postApi.dataLoader.load(id)
}

export const userResolvers = {
  Query: {
    user,
    users,
  },
  User: {
    posts,
  },
}
