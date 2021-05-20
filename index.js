const { GraphQLServer } = require('graphql-yoga')
const axios = require('axios');

const baseURL = `https://jsonplaceholder.typicode.com`
var Cache = {};

const resolvers = {
  Query: {
    users: async () => {
      const users = await axios.get(`${baseURL}/users`)
      return users.data;
    },
    user: async (parent, args) => {
      const { id } = args;
      const users = await axios.get(`${baseURL}/users/${id}`)
      return users.data;
    },
    posts: async () => {
      const posts = await axios.get(`${baseURL}/posts`);
      return posts.data;
    },
    post: async (parent, args) => {
      const { id } = args;
      const posts = await axios.get(`${baseURL}/posts/${id}`);
      return posts.data;
    },
    userPosts: async () => {
      const user = await axios.get(`${baseURL}/users`);
      return user.data;
    },
    comments: async () => {
      const comments = await axios.get(`${baseURL}/comments`);
      return comments.data;
    },
  },
  Comment: {
    post: async (parent) => {
      // we implementing simple cache to speedup api
      if(Cache.hasOwnProperty(`post_${parent.postId}`)) return Cache[`post_${parent.postId}`];
      const posts = await axios.get(`${baseURL}/posts/${parent.postId}`);
      Cache[`post_${parent.postId}`] = posts.data;
      return Cache[`post_${parent.postId}`];
    }
  },
  Post: {
    user: async (parent) => {
      // we implementing simple cache to speedup api
      if(Cache.hasOwnProperty(`user_${parent.userId}`)) return Cache[`user_${parent.userId}`];
      const users = await axios.get(`${baseURL}/users/${parent.userId}`);
      Cache[`user_${parent.userId}`] = users.data;
      return Cache[`user_${parent.userId}`];
    }
  },
  UserPost: {
    posts: async (parent) => {
      // we implementing simple cache to speedup api
      if(Cache.hasOwnProperty(`user_posts_${parent.id}`)) return Cache[`user_posts_${parent.id}`];
      const posts = await axios.get(`${baseURL}/posts?userId=${parent.id}`);
      Cache[`user_posts_${parent.id}`] = posts.data;
      return Cache[`user_posts_${parent.id}`];
    }
  }
}

const server = new GraphQLServer({
  typeDefs: "./schema/core.graphql",
  resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))
