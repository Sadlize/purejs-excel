import $ from 'core/DOM';

export default class LayoutComponent {
  constructor(selector, options) {
    this.$el = $(selector);
    this.components = options.components || [];
  }

  getRoot(tagName, classes) {
    const $root = $.create(tagName, classes);

    this.components = this.components.map((Component) => {
      const $el = $.create('div', Component.className);
      const component = new Component($el);
      $el.html(component.render());
      $root.append($el);

      return component;
    });

    return $root;
  }

  render(tagName, classes) {
    this.$el.append(this.getRoot(tagName, classes));
    this.components.forEach((component) => component.init());
  }
}
