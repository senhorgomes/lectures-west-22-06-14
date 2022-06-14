What is Express?
Framework for node.js apps to more easily accept HTTP Requests, and return HTTP responses.
REST?
REST means that the path that we are going to should represent the data being transferred. An API that uses the REST convention is said to be RESTful.

REST's guidelines
HTTP GET should be used for all retrieval. It should never be used to create, update, or do things.
HTTP POST should be used for creating. It shouldn’t be used to update or get a resource. If a URI had never existed before now and you’re going to create it and make it hold some data, use POST.
HTTP PUT should be used for updating — meaning replacing a collection with different data. The URI should have existed before.
HTTP DELETE should be used for deleting.

CRUD?
> Create -  POST
> Read - GET
> Update - PUT
> Delete - DELETE

Routes

A route is made up of a VERB and a PATH

GET vs POST?

GET 
Is able to send a request with query parameters (right in the URL / address bar)
Easy to share / reproduce
Great for searches and reaching resources consistently

POST
Not easily bookmarkable / reproducable
Does not show submission values in address bar / URL
Great for sign-ins, edits, etc. -> actions you don't want as easily repeated or visible

EJS
stands for Embedded JavaScript

<% %>: for logic, non-outputing 
<%= %>: will output some javascript 

Forms VS Anchor Tags

* Forms can either GET or POST
* Forms are used to gather information that a user has been submitted
* Anchor tags can only use GET methods
* If data is being updated, you should use POST

INPUTS vs BUTTONS

* Both have similar functionalty
* Input tags are self closing
* Buttons can be visually modified more, and they can have information wrapped inside of them

Middleware and what is it?
Middleware functions are the perfect place to modify the req and res objects with relevant information.
Its functions that helps us manage, or modify req and/or res objects.
Uses of middleware in this project
Nodemon - Restarts the node application when file changes in the directory are detected. You must specify this in the package.json
Body-Parser - Parse incoming request bodies in a middleware before your handlers, available under the req.body property(Later version of express already have body-parser built in)
Morgan - HTTP request logger middleware for node.js
