import Component from '@ember/component';

export default Component.extend({
  tagName: 'button',
  classNames: ['link-btn'],
  addRuleAction: null,

  click() {
    this.get('addRuleAction')();
  },

  actions: {}
});
