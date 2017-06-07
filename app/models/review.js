import DS from 'ember-data';

// const { attr, hasMany } = DS;

export default DS.Model.extend({
  images: DS.hasMany('image'),
  title: DS.attr('string')
});
