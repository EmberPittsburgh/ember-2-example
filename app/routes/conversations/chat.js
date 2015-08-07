import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({

  model(params) {
    const convos = [
      Ember.Object.create({ id: 1, sender: 'Alex' }),
      Ember.Object.create({ id: 2, sender: 'Craig' })
    ];
    return convos[params.chat_id - 1];
  },

  renderTemplate() {
    this.render({ component: 'chat-ui' });
  }

});
