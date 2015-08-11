import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  sender: null,
  body: faker.lorem.sentence,
  timestamp: faker.date.recent
});

