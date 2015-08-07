import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({

  model() {
    return [
      Ember.Object.create({ sender: 'Alex' }),
      Ember.Object.create({ sender: 'Craig' })
    ];
  },

  renderTemplate() {
    this.render({ component: 'chat-route' });
  }
});
