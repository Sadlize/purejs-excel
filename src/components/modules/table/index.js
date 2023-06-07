import ExcelComponent from 'core/ExcelComponent';
import TableTemplate from 'components/modules/table/table.template';
import resizeHandler from 'components/modules/table/table.resize';
import {
  isCell,
  shouldResize,
  matrix,
} from 'components/modules/table/table.functions';
import TableCellsSelection from 'components/modules/table/TableCellsSelection';
import $ from 'core/DOM';

export default class Table extends ExcelComponent {
  static className = 'excel';

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown'],
    });
  }

  prepare() {
    this.selection = new TableCellsSelection();
  }

  init() {
    super.init();
    const initCell = this.$root.find('[data-cell="A1"]');
    this.selection.select(initCell);
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event);
    } else if (isCell(event)) {
      const $target = $(event.target);
      if (event.shiftKey) {
        const $groupCells = matrix($target, this.selection.current).map((e) =>
          this.$root.find(`[data-cell="${e}"]`),
        );
        this.selection.selectGroup($groupCells);
      } else {
        this.selection.select($target);
      }
    }
  }

  render() {
    return TableTemplate(50);
  }
}
