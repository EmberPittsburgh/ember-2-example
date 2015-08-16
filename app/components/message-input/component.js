import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({

  // The value to bind the input to
  value: '',

  // Action to invoke when the "send" button is clicked
  sendMessage: null,

  actions: {

    submit() {
      const value = this.get('value');
      this.attrs.sendMessage(value);
      this.set('value', '');
    }

  }

});
