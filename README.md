# Social-Network-API

# Description
MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility. We have built an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Here we use Express.js for routing, a MongoDB database, and the Mongoose ODM.

# User Story
``md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
``
# Acceptance Criteria
``md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
``md

# How we did this:
## By:

We have implemented a social network API using MongoDB as the NoSQL database, Express.js for routing, and the Mongoose ODM. This API is designed to cater to the needs of a social media startup, providing a scalable solution to handle large amounts of unstructured data.

To meet the requirements, we implemented the following features in our social network API:

Server Initialization: When invoking the application, our server starts successfully. The Mongoose models are also synchronized with the MongoDB database, ensuring smooth operations.
GET Routes: We have implemented GET routes for users and thoughts. When accessing these routes using tools like Insomnia, the data is displayed in a well-formatted JSON format. This allows easy retrieval and viewing of user and thought data.
POST, PUT, and DELETE Routes: Our API supports POST, PUT, and DELETE routes to create, update, and delete users and thoughts in the database. Users can easily manage their profile and thoughts using these routes.

Reactions and Friend Management: Additionally, we have implemented POST and DELETE routes to handle reactions to thoughts and manage a user's friend list. Users can express their reactions to thoughts, and friend relationships can be added or removed seamlessly.
By implementing these features, we have developed a robust social network API that fulfills the acceptance criteria. Our API leverages the power of MongoDB, Express.js, and Mongoose to provide a seamless user experience, efficient data handling, and support for diverse social interactions on our platform.


## Link to Github Repository
https://github.com/shababrc/Social-Network-API

## Link to Walkthrough Video
https://youtu.be/LLXAuuQJhhg

## Credits
Big thanks to the rest of the bootcamp class for their help, as well as Bryan and Shawn for their expertise. Thanks to tutors Irina Kudosova, and Jehyun Jung.

## License
MIT License



