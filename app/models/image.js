import DS from 'ember-data';

export default DS.Model.extend({
  // review: DS.belongsTo('review'),
  url: DS.attr('string')
});
