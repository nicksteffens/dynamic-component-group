import { module, test } from 'qunit';
import { visit, click, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | application', function(hooks) {
  setupApplicationTest(hooks);

  test('single rule set w/o rule', async function(assert) {
    await visit('/');
    await click('button.add-rule-set');

    assert.dom('.btn-group').exists({ count: 1 });
    assert.dom('.rule-add').isDisabled();
    assert.dom('.rule-or').isDisabled();
    assert.dom('.add-rule').exists({ count: 1 });
    assert.dom('.add-group').exists({ count: 1 });
  });

  test('adds single rule as queryParam is 400', async function(assert) {
    await visit('/');
    await click('button.add-rule-set');
    await click('button.add-rule');
    await fillIn('[data-prop="queryParam"]', 'honors');
    await fillIn('[data-prop="comparedTo"]', '400');

    assert.dom('.targeting-rule').exists({ count: 1});
    assert.dom('.select-operator').hasValue('is');
    assert.dom('.template-name').exists({ count: 1 });
  });

  test('adds rule w/between date "and" child rule-set with 4 query param rules', async function(assert) {
    await visit('/');
    await click('button.add-rule-set');
    await click('button.add-rule');
    await click('button.add-group');

    assert.dom('.rule-container').exists({ count: 2 });
    assert.dom('.rule-add').exists({ count: 1 });
    assert.dom('.rule-or').exists({ count: 1 });
    assert.dom('.rule').exists({ count: 5 });
  });
});
