# Solutions

- Get all the posts
  - GET /posts
- Create a new post - POST /posts
- Edit a post
  - PUT /posts/:postId
  - PATCH /posts/:postId
- Create a new user
  - POST /users
- Get the comments for a post
  - GET /posts/:postId/comments
- Create a comment for a post
  - POST /posts/:postId/comments
- Edit a comment for a post
  - PUT /comments/:commentId
  - PATCH /comments/:commentId
- Delete a comment for a post
  - DELETE /comments/:commentId
- Add a like for a post
  - POST /posts/:postId/likes
- Remove a like for a post
  - DELETE /posts/:postId/likes/:likeId
  - DELETE /likes/:likeId
  <!-- - DELETE /posts/:postId/like
  The one above adds layers of complexity that deal with database relationships. You don't need to worry too much about those right now -->
- Get all the posts of a user
  - GET /users/:userId/posts
- Submit a search on posts
  - GET /posts?key=value
  - POST /posts/search
    <!-- In the post above we would send our search terms in the request body -->
