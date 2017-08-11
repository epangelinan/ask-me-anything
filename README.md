# ask-me-anything

This README outlines the details of collaborating on this Ember application.
This is a web app question and answer message board, where users can submit a question, then other users can respond with answers.

## Planning

1. Configuration/dependencies
  * The dependencies are listed under Prerequisites section below.  Node and Ember are used to to minimize the the amount of configuration necessary to get an application up and running by using the "convention over configuration" design.  Using Ember, a number of peripheral tasks to application development have been streamlined, such as testing, compiling, and serving files.

2. Specs
  * Spec 1: List all questions on the homepage, displaying only the question and the name of the author.
  * Spec 2: Allow users to click a question, to be routed to another page containing additional information and question details.
  * Spec 3: Allow users to add and edit questions.
  * Spec 4: Allow users to add answers to a question. Answers should be added and viewed on the same page as the question they respond to.
  * Spec 5: Questions should include the content of the question itself, an author, and additional notes.
  * Spec 6: Answers should include the content of the answer and the author.
  * Spec 7: Include a header and/or navbar that appears on all pages. It should contain the name of your site and a link to the home page, and other content such as social media, LinkedIn, etc.


3. Integration
  * Initial routes or index pages with all dependencies in Controller/index.html head
  * Template/html page for: about
  * Template/html page for: contact
  * Template/html page for: index (homepage)
  * Template/html page for: question
  * Display About page, Contact page, Homepage, and web page for each question
  * Integrate features that support the above specced behavior.

4. UX/UI
  * Include Bootstrap
  * Add CSS styling

5. Polish
  * Refactor minor portion of...
  * Delete unused...
  * Make README awesome

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd ask-me-anything`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
