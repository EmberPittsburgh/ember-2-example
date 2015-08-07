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

  renderTemplate() {
    this.render({ component: 'conversation-list' });
  }
});
