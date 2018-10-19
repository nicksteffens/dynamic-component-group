import Component from '@ember/component';

export default Component.extend({
  tagName: 'button',
  classNames: ['link-btn'],

  addGroupAction: null,

  click() {
    this.get('addGroupAction')();
  }
});
