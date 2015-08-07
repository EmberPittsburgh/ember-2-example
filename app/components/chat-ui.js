import Ember from 'ember';

const { Component, computed } = Ember;
const { alias } = computed;

export default Component.extend({

  isGlimmerComponent: true,

  conversation: alias('model'),

  sender: alias('conversation.sender')

});
