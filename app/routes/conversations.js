import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({

  model() {
    return [
      Ember.Object.create({ id: 1, sender: 'Alex' }),
      Ember.Object.create({ id: 2, sender: 'Craig' })
    ];
  },

  renderTemplate() {
    this.render({ component: 'chat-route' });
  }
});
