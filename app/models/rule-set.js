import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  templateName: attr('string'),
  // group: attr('string'), // AND / OR

  rules: hasMany('rule'),
  groups: hasMany('group')
});
