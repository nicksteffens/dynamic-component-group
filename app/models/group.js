import DS from 'ember-data';

const { belongsTo, hasMany } = DS;

export default DS.Model.extend({
  rules: hasMany('rule'),
  groups: hasMany('group', { inverse: null}),
  ruleSet: belongsTo('rule-set'),
});
