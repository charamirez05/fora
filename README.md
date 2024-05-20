# FORA
### An open website to freely and randomly post on forums.

As of May 14, 2024, the starting features are:

- Create a post (Working)
- View all forums (Working)
- View one post (Working)
- Give a star to a post + automatic update (working)
- Comment on a post  (This is open to all comments as there is no authentication/log-in feature yet.) (Working)
- Delete a post


Plans for to-be-implemented features:
- Filter forums by category (e.g. author, date, title)
- Search forum/post by category (e.g. author, date, title)



> Backend JSON Server is separately deployed in Render.


>Frontend is deployed in Render.


>The backend used in the master branch is the *deployed* JSON server

Updates as of May 21, 2024
- Implemented react-hook-form for creating a new forum and adding new comment
- Implemented react-query for API calls and query invalidations after mutations
- Converted HTML components to MUI Components
- Stopped the use useContext 