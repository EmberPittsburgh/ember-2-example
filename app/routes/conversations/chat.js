import Ember from 'ember';
import ajax from 'ic-ajax';

const { Route } = Ember;

export default Route.extend({

  model(params) {
    return ajax({ url: `/api/conversations/${params.chat_id}` })
    .then(function({ conversation }) {
      return conversation;
    });
  },

  renderTemplate() {
    this.render({ component: 'chat-ui' });
  }

});
