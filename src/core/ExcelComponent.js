import DomListener from 'core/DomListener';

export default class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
  }

  init() {
    this.initDOMListeners();
  }

  render() {
    return '';
  }
}
