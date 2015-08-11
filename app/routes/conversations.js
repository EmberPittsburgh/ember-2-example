import Ember from 'ember';
import ajax from 'ic-ajax';

const { Route } = Ember;

export default Route.extend({

  model() {
    return ajax({ url: '/api/conversations' })
    .then(function({ conversations }) {
      return conversations;
    });
  },

  redirect() {
    this.transitionTo('conversations.chat', 1);
  },

  renderTemplate() {
    this.render({ component: 'conversation-list' });
  }
});
