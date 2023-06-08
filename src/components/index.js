import $ from 'core/DOM';
import emitter from 'core/Emitter';

export default class LayoutComponent {
  constructor(selector, options) {
    this.$parent = $(selector);
    this.children = options.children || [];
    this.emitter = emitter;
  }

  getRoot(tagName, classes) {
    const $root = $.create(tagName, classes);

    const componentOptions = { emitter: this.emitter };

    this.children = this.children.map((Component) => {
      const $el = $.create('div', Component.className);
      const component = new Component($el, componentOptions);
      $el.html(component.render());
      $root.append($el);
      return component;
    });

    return $root;
  }

  render(tagName, classes) {
    this.$parent.append(this.getRoot(tagName, classes));
    this.children.forEach((component) => component.init());
  }

  destroy() {
    this.children.forEach((children) => children.destroy());
  }
}
