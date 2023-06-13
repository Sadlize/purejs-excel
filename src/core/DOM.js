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

  text(text) {
    const tag = this.$el.tagName.toLowerCase();
    const property = tag === 'input' ? 'value' : 'textContent';
    if (typeof text !== 'undefined') {
      this.$el[property] = text;
      return this;
    }
    return this.$el[property].trim();
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

  find(selector) {
    // eslint-disable-next-line no-use-before-define
    return $(this.$el.querySelector(selector));
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

  getStyles(styles = []) {
    const res = {};
    styles.forEach((s) => {
      res[s] = this.$el.style[s];
    });
    return res;
  }

  cellId(parse) {
    if (parse) {
      const id = this.cellId().split(':');
      return {
        row: +id[0],
        col: +id[1],
      };
    }
    return this.data.cell;
  }

  focus() {
    this.$el.focus();
    return this;
  }

  attr(name, value) {
    if (value) {
      this.$el.setAttribute(name, value);
      return this;
    }

    return this.$el.getAttribute(name);
  }

  addClass(className) {
    this.$el.classList.add(className);
  }

  removeClass(className) {
    this.$el.classList.remove(className);
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
