/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* 
         * ensures it has a URL defined and that the URL is not empty.       
         */

         it('are the URLs defined', function() {
           for (const feed of allFeeds) {
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0);
           }
         });


        /* 
         * ensures it has a name defined and that the name is not empty.
         */

         it('are the names defined', function() {
           for (const feed of allFeeds) {
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(0);
           }
         });
    });

    
    describe('The menu', function() {

        /* 
         * ensures the menu element is hidden by default.
         */

         it('is hidden by default', function() {
            expect(document.querySelector('body').classList).toContain('menu-hidden');            
         });         

         /* 
          * ensures the menu changes visibility when the menu icon is clicked. 
          */

         it('is displaying/hiding when clicked', function() {
            // case menu is hidden
            if(document.querySelector('body').className === "menu-hidden"){
                document.querySelector('.menu-icon-link').click();
                expect (document.querySelector('body').classList).not.toContain('menu-hidden');
            }    
            // case menu is visible
            if(document.querySelector('body').className !== "menu-hidden"){            
                document.querySelector('.menu-icon-link').click();
                expect (document.querySelector('body').classList).toContain('menu-hidden');
            }
         });
         
    });          

    
    describe('Initial Entries', function() {


        /* ensures when the loadFeed function is called and completes its work, 
         * there is at least a single .entry element within the .feed container.
         */

         beforeEach(function(done) {
            loadFeed(0, function () {
                done();
            });
         });         

         it('is there at least a single .entry element', function(){
            expect(document.querySelector('.feed .entry').className).toContain('entry');
         });

    });             

    describe('New Feed Selection', function() {    

        /* ensures when a new feed is loaded by the loadFeed function that the
         * content actually changes.
         */

         let oldContent, newContent;

         beforeEach(function(done){
            loadFeed(1, function () {
                oldContent = document.querySelector('.feed').querySelector('.entry').innerHTML;               
                loadFeed(0, function () {
                    newContent = document.querySelector('.feed').querySelector('.entry').innerHTML;
                    done();
                });                    
            });      


         });

         it('is the feed content changing', function(){
            expect(oldContent).not.toBe(newContent);
         });         

    });     

}());
