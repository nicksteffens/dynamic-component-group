import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | targeting-rule', function(hooks) {
  setupRenderingTest(hooks);

  test('it fires an action on update', async function(assert) {
    this.set('rule', {});
    this.set('updateRule', rule => {
      this.set('rule', rule);
    });

    await render(hbs`
      <TargetingRule
        @rule={{this.rule}}
        @onUpdate={{action this.updateRule}}
      />
    `);

    await fillIn('input[data-prop=queryParam]', 'hello');

    assert.deepEqual(this.get('rule'), {
      queryParam: 'hello'
    });
  });
});
