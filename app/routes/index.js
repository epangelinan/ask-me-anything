import Ember from 'ember';

var questions = [{
  id: 1,
  content: "What is the dumbest coding question you have been asked?",
  author: "Andrew Rout",
  notes: "former Software Architect at Paradox Labs",
}, {
  id: 2,
  content: "What is the best question you can ask the interviewer at the end of the interview?",
  author: "Carlos Portocarrero",
  notes: "studied at DePaul University",
}];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
