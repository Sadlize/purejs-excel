class DOM {
  constructor(selector) {
    this.$el =
      typeof selector === 'string'
        ? document.querySelector(selector)
        : selector;
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html;
      return this;
    }

    return this.$el.outerHTML.trim();
  }

  clear() {
    this.html('');
    return this;
  }

  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback);
  }

  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback);
  }

  append(node) {
    if (node instanceof DOM) {
      node = node.$el;
    }

    if (Element.prototype.append) {
      this.$el.append(node);
    } else {
      this.$el.appendChild(node);
    }

    return this;
  }

  closest(selector) {
    // eslint-disable-next-line no-use-before-define
    return $(this.$el.closest(selector));
  }

  getCoords() {
    return this.$el.getBoundingClientRect();
  }

  findAll(selector) {
    return this.$el.querySelectorAll(selector);
  }

  get data() {
    return this.$el.dataset;
  }

  css(styles = {}) {
    Object.entries(styles).forEach(([property, value]) => {
      this.$el.style[property] = value;
    });
  }

  setAttribute(qualifiedName, value = '') {
    return this.$el.setAttribute(qualifiedName, value);
  }

  removeAttribute(qualifiedName) {
    return this.$el.removeAttribute(qualifiedName);
  }
}

export default function $(selector) {
  return new DOM(selector);
}

$.create = (tagName, className) => {
  const element = document.createElement(tagName);

  if (className) {
    element.classList.add(className);
  }

  return $(element);
};
