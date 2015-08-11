import Ember from 'ember';

const { Component, computed } = Ember;
const { alias } = computed;

export default Component.extend({

  classNameBindings: [
    'sender:received',
    'sender::sent'
  ],

  /**
   * The message to render
   *
   * @property {Chat} message;
   */
  message: null,

  /**
   * The user that sent the message.  Is `null` if the message was sent by the
   * "logged in" user
   *
   * @property {Sender} sender
   */
  sender: alias('message.sender')

});
