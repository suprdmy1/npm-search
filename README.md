# Getting Started with NPM Search App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Functionlity

### Debug Mode

Debug mode allows QA to simulate different app errors
Debug mode could be used by select any options in the top dropdown

Available options:
 - WRONG_PATH // Allow simulating accessing to bad API path
 - NO_RESULTS // Allow simulating empty results from the server
 - BAD_REQUEST // Allow testing accessing to bad URL
 - DISABLED // Disabling Debug mode and allow behave application normally

### NPM Search

The core functionality of the application
The search form allows the user to search NPM packages from NPM recommendation API

To use Search user should fill > 3 symbols in the search field.
After press, the search button user should see results available on the NPM recommendation server.

If the user enters less than 3 symbols, the app will prompt with an error to enter more than 2 symbols to make a more proper search.
If no results are found the user will see the message "No results" in the Search Result View.

### NPM Search Result

After the user enters a query in the Search field user will get results from the server.

Results contain next fields:
- Name of the Package
- Description
- Tags
- Links to Package resources
- Author of the Package
- Information about latest update

### NPM Search Result Item

The result item it is sepatate component (Part of Search Result) which has some additional helpful features for user.
Features:
- Links will navigate to NPM paths and pages according to names on the link ex. npm will go to npm package page
- Tags are clickable, when the user will click on the tag search will automatically search for a query with tag value
The search field not will be updated to allow the user to come back to the start result point.
- Author's Link, if the author has a page it will navigate the user to that page if the author's text is black it means there is no link.

### Additional Notes
App design is responsive and will work in browsers and on mobile devices.