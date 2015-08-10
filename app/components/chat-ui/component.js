import Ember from 'ember';

const { Component, computed } = Ember;
const { alias } = computed;

export default Component.extend({

  classNames: ['medium-10'],

  isGlimmerComponent: true,

  conversation: alias('model'),

  sender: alias('conversation.sender'),

  messages: alias('conversation.messages')

});
