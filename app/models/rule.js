import DS from 'ember-data';

const { belongsTo } = DS;

export default DS.Model.extend({
  ruleSet: belongsTo('rule-set'),
  group: belongsTo('group')
});
