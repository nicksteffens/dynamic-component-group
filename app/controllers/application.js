import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('rule', {
      option: 'Query Parameter',
      queryParam: '',
      comparator: 'is',
      comapredTo: ''
    });
  },

  addNewRule: false,
  addNewGroup: false,
  model: null,

  actions: {
    addRuleSet() {
      const model = this.get('store').createRecord('rule-set');
      this.set('model', model);
    },

    addRule(model) {
      const rule = this.get('store').createRecord('rule');

      model.rules.pushObject(rule);
    },

    addGroup(model) {
      const group = this.get('store').createRecord('group');

      model.groups.pushObject(group);
    },
  }
});
