# Getting Started with NPM Search App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Functionlity

### Debug Mode

Debug mode allow QA to simulate different app errors
Debug mode could be used by select any options in the top dropdown

Available options:
 - WRONG_PATH // Allow to simulate accessing to bad api path
 - NO_RESULTS // Allow to simulate empty results from the server
 - BAD_REQUEST // Allow to test accessing to bad url
 - DISABLED // Disable Debug mode and allow behave application normally

### NPM Search

Core functionality of the application
Search form allow user to search NPM packages from NPM reccomendation API

To use Search user should fill > 3 symbols in the search field.
After press search button user should see results available on the NPM recommendation server.

If user enter less than 3 symbols app will prompt with error to enter more than 2 symbols to make more proper search.
If no results found user will see the message "No results" in the Search Result View.

### NPM Search Result

After user enter query in the Search field user will get results from the server.

Results contains next fields:
- Name of the Package
- Description
- Tags
- Links to Package resources
- Author of the Package
- Information about latest update

### NPM Search Result Item

Result item it is sepatate component (Part of Search Result) which has some additional helpful features for user.
Features:
- Links will navigate to NPM paths and pages according to names on the link ex. npm will go to npm package page
- Tags are clickable, when user will click on the tag search will automatically search for query with tag value
Search field not will be updated to allow user come back to start result point.
- Author Link, if author has a page it will navigate user to that page if author text is black it means there is no link.

### Additional Notes
App design is responsive and will work in browser and on mobile devices.