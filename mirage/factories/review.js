import Mirage, { faker, Factory, hasMany } from 'ember-cli-mirage';

export default Factory.extend({
  title: faker.lorem.sentence
})
