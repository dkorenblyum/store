import Ember from 'ember';

export default Ember.Controller.extend({
  actions : {
    pingReviews () {
      console.log(this.get('model'))
    }
  }
});