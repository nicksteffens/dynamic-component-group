import Component from '@ember/component';

export default Component.extend({
  isAnd: true,

  actions: {
    setGroup(boo) {
      this.set('isAnd', boo);
    }
  }
});
