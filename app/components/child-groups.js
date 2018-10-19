import Component from '@ember/component';

export default Component.extend({
  classNames: ['card'],
  parent: null,
  addRuleAction: null,
  addGroupsAction: null,

  actions: {
    addRule(parent) {
      this.get('addRuleAction')(parent);
    },
    addGroup(parent) {
      console.log('actions create group', parent);
      this.get('addGroupsAction')(parent);
    }
  }
});
