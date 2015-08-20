import Ember from 'ember';

const { GlimmerComponent, computed } = Ember;
const { alias } = computed;

export default GlimmerComponent.extend({

  classNameBindings: [
    'sender:received',
    'sender::sent'
  ],

  isComponentFactory: true,

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
  sender: alias('attrs.message.sender')

});
