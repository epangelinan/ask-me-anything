# ask-me-anything

This README outlines the details of collaborating on this Ember application.
This is a web app question and answer message board, where users can submit a question, then other users can respond with answers.

## Planning

1. Configuration/dependencies
  * The dependencies are listed under Prerequisites section below.  Node and Ember are used to to minimize the the amount of configuration necessary to get an application up and running by using the "convention over configuration" design.  Using Ember, a number of peripheral tasks to application development have been streamlined, such as testing, compiling, and serving files.

2. Specs
  * Spec 1: Questions should include the content of the question itself, an author, and additional notes.
  * Spec 2: Answers should include the content of the answer and the author.
  * Spec 3: Include a header and/or navbar that appears on all pages. It should contain the name of your site and a link to the home page, and other content such as social media, LinkedIn, etc.
  * Spec 4: List all questions on the homepage, displaying only the question and the name of the author.
  * Spec 5: Allow users to click a question, to be routed to another page containing additional information and question details.
  * Spec 6: Allow users to add and edit questions.
  * Spec 7: Allow users to add answers to a question. Answers should be added and viewed on the same page as the question they respond to.


3. Integration
  * Initial routes or index pages with all dependencies in Controller/index.html head
  * Template/html page for ...
  * Template/html page for ...
  * Template/html page for ... (one for each route/integrated user story)
  * Display...
  * Integrate feature that...

4. UX/UI
  * Include and modify bootstrap/materialize/Sass etc.
  * Develop custom style

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
