import { capitalizeFirstLetter } from 'utils/helpers';

export default class DomListener {
  constructor($root, listeners) {
    if (!$root) {
      throw new Error('No $root element provided for DomListener!');
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    if (this.listeners) {
      this.listeners.forEach((listener) => {
        const method = `on${capitalizeFirstLetter(listener)}`;
        if (!this[method]) {
          throw new Error(
            `There is no '${method}' method in '${this.name}' component`,
          );
        }
        this[method] = this[method].bind(this);
        this.$root.on(listener, this[method]);
      });
    }
  }

  removeDOMListeners() {
    if (this.listeners) {
      this.listeners.forEach((listener) => {
        const method = `on${capitalizeFirstLetter(listener)}`;
        this.$root.off(listener, this[method]);
      });
    }
  }
}
