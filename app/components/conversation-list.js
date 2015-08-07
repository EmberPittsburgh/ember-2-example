import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['grid-block', 'medium-2'],

  conversations: [
    Ember.Object.create({
      sender: 'Alex'
    }),
    Ember.Object.create({
      sender: 'Craig'
    })
  ]
});
