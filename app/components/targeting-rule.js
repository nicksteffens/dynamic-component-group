import Component from '@ember/component';

export default Component.extend({
  classNames: ['targeting-rule'],
  onUpdate() {},
  removeRuleAction: null,

  actions: {
    updateProperty(propName, value) {
      this.onUpdate({
        ...this.rule,
        [propName]: value
      });
    },

    removeRule() {
      this.get('removeRuleAction')();
    }
  }
});
