import $ from 'core/DOM';

export default class LayoutComponent {
  constructor(selector, options) {
    this.$parent = $(selector);
    this.children = options.children || [];
  }

  getRoot(tagName, classes) {
    const $root = $.create(tagName, classes);

    this.children = this.children.map((Component) => {
      const $el = $.create('div', Component.className);
      const component = new Component($el);
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
}
