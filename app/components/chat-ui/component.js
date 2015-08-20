import Ember from 'ember';

const { Component, computed, on } = Ember;
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
  }),

  scrollToBottom() {
    const scrollTop = this.$('.messages-wrapper').height();
    this.$('.messages').animate({ scrollTop }, "slow");
  },

  startAtBottom: on('didInsertElement', function() {
    this.scrollToBottom();
  }),

  actions: {

    // Add a new message to the conversation
    sendMessage(body) {
      const messages = this.get('messages');
      messages.push({ body, timestamp: new Date() });
      this.set('messages', messages);
      this.notifyPropertyChange('sortedMessages');
      this.scrollToBottom();
    }

  }

});
