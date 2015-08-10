import Ember from 'ember';

const { Component, computed } = Ember;
const { alias } = computed;

export default Component.extend({

  classNames: ['grid-block', 'medium-10'],

  isGlimmerComponent: true,

  conversation: alias('model'),

  sender: alias('conversation.sender')

});
