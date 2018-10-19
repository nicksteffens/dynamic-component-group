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

  actions: {
    updateRule(rule) {
      this.set('rule', rule);
    },

    addNewRule() {
      this.set('addNewRule', true);
    },

    removeRule() {
      this.set('addNewRule', false);
    },

    addNewGroup() {
      this.set('addNewGroup', true);
    }
  }
});
