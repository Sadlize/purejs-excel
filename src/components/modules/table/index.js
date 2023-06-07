import ExcelComponent from 'core/ExcelComponent';
import TableTemplate from 'components/modules/table/table.template';
import resizeHandler from 'components/modules/table/table.resize';
import {
  isCell,
  shouldResize,
  matrix,
  nextSelector,
} from 'components/modules/table/table.functions';
import TableCellsSelection from 'components/modules/table/TableCellsSelection';
import $ from 'core/DOM';

export default class Table extends ExcelComponent {
  static className = 'excel';

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'keydown'],
    });
  }

  prepare() {
    this.selection = new TableCellsSelection();
  }

  init() {
    super.init();
    const initCell = this.$root.find('[data-cell="0:0"]');
    this.selection.select(initCell);
  }

  render() {
    return TableTemplate(50);
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

  // eslint-disable-next-line class-methods-use-this
  onKeydown(event) {
    const keys = [
      'Enter',
      'Tab',
      'ArrowLeft',
      'ArrowRight',
      'ArrowDown',
      'ArrowUp',
    ];
    const { code } = event;
    if (keys.includes(code) && !event.shiftKey) {
      event.preventDefault();
      const cellId = this.selection.current.cellId(true);
      const $next = this.$root.find(nextSelector(code, cellId));
      this.selection.select($next);
    }
  }
}
