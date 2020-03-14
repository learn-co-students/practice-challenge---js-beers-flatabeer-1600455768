# FlataBeer

Today you'll be building an app for viewing and editing beers. You will be using a local API and building out the frontend for our app, FlataBeer.

## Demo

Use this gif as an example of how the app should work.

![demo gif](assets/demo.gif)

## Setup

- Fork and clone this repository
- Run `json-server --watch db.json` to get the backend started
- Open `index.html` in your browser

## Endpoints

Your base URL for your API will be: http://localhost:3000

The endpoints you will need are:

- GET `/beers/[:id]`
- PATCH `/beers/[:id]`
- GET `/beers` (for Advanced Deliverables only)

## Core Deliverables

As a user, I can:

- See the first beer's details, including its **name, image, description, and reviews**, when the page loads
- Change the beer's description and **still see that change when reloading the page**
- Add a review for the beer (no persistence needed)

## Advanced Deliverables

These deliverables are not required to pass the code challenge, but if you have the extra time, or even after the code challenge, they are a great way to stretch your skills.

> Note: If you are going to attempt these advanced deliverables, please be sure to have a working commit with all the Core Deliverables first!

As a user, I can:

- Still see the review after refreshing the page
- Delete a review
- See a menu of all beers on the left side of the page - clicking a beer's name replaces the currently displayed beer's details with the details of the beer I clicked on

## Rubric

### DOM Manipulation

1. Did not properly render elements to the DOM.

2. Rendered elements to the DOM, but with some errors.

3. Successfully rendered and updated the DOM as described by the Core Deliverables.

4. Structured HTML creation code cleanly and in a reusable way, using a semantically correct HTML structure without any unnecessary elements.

5. Completed at least one Advanced Deliverable.

### Events

1. Did not attach event listeners to respond to events.

2. Attached event listeners, but incompletely or with some errors.

3. Successfully attached event listeners to handle DOM events and met all of the Core Deliverables.

4. Structured code in a clean and reusable way, splitting functions, using descriptive names and using target properties effectively.

5. Completed at least one Advanced Deliverable.

### Communication with the Server

1. Unable to communicate with the server.

2. Partially able to communicate with the server, but incompletely or with some errors.

3. Able to perform a GET and a non-GET request successfully. All Core Deliverables met.

4. Code structured in a clean and reusable way, splitting into functions and reusing them where needed, with clear function and variable naming.

5. Completed at least one Advanced Deliverable.
