# Graphql - Rest

* Wrapping rest api to graphql.
* Convert multiple api, joining api into one source.


# Sample api

* Get sample api from mock api in [here](https://jsonplaceholder.typicode.com/)
    * there's example api for `posts`, `users`, `comment`, `images` etc ...
    * then join all api to single source ..



# Example image

![Schema](https://raw.githubusercontent.com/FerdinaKusumah/graphql-rest/master/Graphql%20Schema.png)

# Transform api data from 2 api like this

* Api comments
```json
{
  postId: 1,
  id: 1,
  name: "id labore ex et quam laborum",
  email: "Eliseo@gardner.biz",
  body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium"
}
```

* Api Posts
```json
{
  userId: 1,
  id: 1,
  title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
}
```

# To api like this on the fly

```json
{
  postId: 1,
  id: 1,
  name: "id labore ex et quam laborum",
  email: "Eliseo@gardner.biz",
  body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium",
  post: {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
  }
}
```

# Installation

* install dependency `npm install graphql-yoga`, `npm install axios`
* run project `node index.js`
* open browser then go to `http://localhost:4000`
* api available:
  * users, user(id)
  * posts, post(id)
  * usersPosts
  * comments
  

* Any contributor are welcome !!