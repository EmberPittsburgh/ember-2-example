import Ember from 'ember';

const { Component, computed } = Ember;
const { alias, sort } = computed;

export default Component.extend({

  classNames: ['medium-10'],

  isGlimmerComponent: true,

  conversation: alias('model'),

  sender: alias('conversation.sender'),

  messages: alias('model.chats'),

  sortedMessages: sort('messages', function(a, b) {
    const t1 = new Date(a.timestamp);
    const t2 = new Date(b.timestamp);

    if (t1 > t2) {
      return 1;
    } else if (t1 < t2) {
      return -1;
    } else {
      return 0;
    }
  })

});
