[![Jennifer Payano logo](https://i.imgur.com/A6F7cRJ.png)](https://jenniferpayano.com)

New Earth Object Finder
----------------
* Description
* Wireframe
* Planning and Development
* User Stories
* ERD
* Catalog of Routes
* Technology
* Unsolved Problems
* Set up and Installation
* Creator

Description
------------
This is a asteroid finding application user interface written in React by me [Jennifer Payano].
I wanted to create this application to allow users to search Asteroids based on their closets approach date to earth.
The goal of the application is display a list of the closets asteroids approaching earth (7 day MAX).

The deployed user interface application url: https://jenniferpayano.com/Todo-list-Client/


WIREFRAME
---------


PLANNING AND DEVELOPMENT
------------------------
To plan this appliction, I knew that I would want to built an application that will help me get a list of objects approaching earth. Development included a table in React that meets one of the CRUD requirements (READ), in addition table will show the total number of objects that approched earth in the 7 day span. 

USER STORIES
------------
- As a user I want to enter start date and end date query into input fields
- As a user I want to submit the start date and end date
- As a user I want to see the total number of near earth objects
- As a user I want to get a list of the names and whether is potentially hazardous of the near earth objects


ERD
-----------------


Catalog of Routes
------------------

Verb         |	URI Pattern
------------ | -------------
GET | /todos/feed?start_date=" + :startDate +"&end_date=" + :endDate + "&api_key=DEMO_KEY",

TECHNOLOGY
------------
- React
- HTML
- CSS


UNSOLVED PROBLEMS
-----------------
- Table is not searchable yet, pending...

Set Up and Installation
-----------------------
- Download this template.
- Unzip and rename the template directory (unzip ~/Downloads/near-earth-object-finder.zip).
- Install dependencies with `npm install`.
- Run the development server with `npm start`.

CREATOR
---------
Jennifer Payano [www.linkedin.com/in/jenniferpayano]
