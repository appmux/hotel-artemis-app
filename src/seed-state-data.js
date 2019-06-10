export default {
  user: {
    __typename: 'User',
    name: 'Alex',
  },
  profiles: [
    {
      __typename: 'UserProfile',
      name: 'Buke',
      avatar: require('./theme/avatars/buke.jpeg')
    },
    {
      __typename: 'UserProfile',
      name: 'Nice',
      avatar: require('./theme/avatars/nice.jpeg')
    },
    {
      __typename: 'UserProfile',
      name: 'Rocco',
      avatar: require('./theme/avatars/rocco.jpeg')
    }
  ]
}
