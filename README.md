# InfoShare

A blog website where users can post and read articles, and follow authors and tags that they are interested in, similar to Medium or Hackernews.

Deployed [here](https://info-share.herokuapp.com).

## Description

Users can enjoy the application with or without an account, however they must sign up in order to publish articles or have a custom feed. The main features of the app are listed below.

### Custom Feed
Once logged in, a user is able to access their custom feed. This is a list of articles either written by users or tags they follow. The articles are ordered such that the newest are at the top. Post titles link to the full post page. 

### Single Post Page
This page displays the entire post along with any comments and likes, as well as a comment page if the user is logged in. Logged in users can like, dislike, and comment on a post. The authors username links to that users profile page. 

### User Profile
The user profile page includes all of the users posts with an 'add post' button, an array of both their followers and those they follow, and a bio which they can edit.

### Search Bar
The search bar can be found on both the feed page and search results page. It allows users to search for other users by username, and articles by title and tag. On the search results page, under the search bar, there is a button bar that allows the user to select by which criteria to search (username, title, tag). 

## Dependancies
InfoShare is dependant on the following npm packages:
* apollo v3.6.1
* graphql v16.2.0
* bcrypt v5.0.1
* jsonwebtoken v8.5.1
* mongoose v6.1.6
* nodemon v2.0.15
* express v4.17.2
* react v17.0.2
* js-cookie v3.0.1
