# Feed Reader - Testing

In this project, the goal was to learn how to use [Jasmine](http://jasmine.github.io/) to write a number of tests against a pre-existing application, testing the underlying business logic of the application as well as the event handling and DOM manipulation.


## Instructions

All required files are included in this repository and it's using the **Jasmine ver. 2.1.2**.  
To run the project, you can download or clone this repo and then open the `index.html`.  
All tests are in `jasmine/spec/feedreader.js`.


## Tests

1. **RSS Feeds**
* the allFeeds object and its properties should be defined and not empty;
2. **The menu**
* the menu should be hidden by default, changing visibility when its icon is clicked
3. **Initial Entries**
* ensures that when the loadFeed function is executed there is at least a single .entry element within the .feed container
4. **New Feed Selection**
* the content actually changes when a new feed is loaded by the loadFeed
