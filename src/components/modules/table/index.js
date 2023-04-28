import ExcelComponent from 'core/ExcelComponent';
import TableTemplate from 'components/modules/table/table.template';

export default class Table extends ExcelComponent {
  static className = 'excel';

  render() {
    return TableTemplate(50);
  }
}
