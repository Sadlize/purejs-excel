import ExcelComponent from 'core/ExcelComponent';
import TableTemplate from 'components/modules/table/table.template';
import resizeHandler from 'components/modules/table/table.resize';
import shouldResize from 'components/modules/table/table.functions';

export default class Table extends ExcelComponent {
  static className = 'excel';

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown'],
    });
  }

  // eslint-disable-next-line class-methods-use-this
  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event);
    }
  }

  render() {
    return TableTemplate(50);
  }
}
