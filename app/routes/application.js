import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.store.findRecord('review', 1);
  }
});


  //   let promises = [
  //     Ember.$.ajax('https://unsplash.it/list',
  //     {
  //       url: 'https://unsplash.it/list',
  //       contentType: 'application/json; charset=utf-8',
  //       dataType: 'json',
  //       type: 'GET',
  //     })
  //   ];
  //   Ember.RSVP.all(promises).then((data) => {
  //     let datum = data;
  //     console.log(data);
  //   })
