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
import {
  actionTableResize,
  actionChangeText,
  actionChangeStyles,
  actionApplyStyle,
} from 'redux/actions';
import { defaultStyles } from 'src/constants';
import formulaParse from 'core/Parse';

export default class Table extends ExcelComponent {
  static className = 'excel';

  constructor($root, options) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'keydown', 'input'],
      ...options,
    });
  }

  prepare() {
    this.selection = new TableCellsSelection();
  }

  updateTextInStore(value) {
    this.$dispatch(
      actionChangeText({
        id: this.selection.current.cellId(),
        value,
      }),
    );
  }

  getNextCell(key) {
    const cellId = this.selection.current.cellId(true);
    return this.$root.find(nextSelector(key, cellId));
  }

  init() {
    super.init();
    const $initCell = this.$root.find('[data-cell="0:0"]');
    this.selectCell($initCell);

    this.$emitSub('formula:input', (value) => {
      this.selection.current.attr('data-formula', value);
      this.updateTextInStore(value);
    });

    this.$emitSub('formula:done', (value) => {
      this.selection.current.text(formulaParse(value));
      this.selectCell(this.getNextCell('Enter'));
    });

    this.$emitSub('toolbar:applyStyle', (value) => {
      this.selection.applyStyle(value);
      this.$dispatch(
        actionApplyStyle({
          value,
          ids: this.selection.selectedIds,
        }),
      );
    });
  }

  render() {
    return TableTemplate(50, this.store.getState());
  }

  async resizeTable(event) {
    try {
      const data = await resizeHandler(this.$root, event);
      this.$dispatch(actionTableResize(data));
    } catch (e) {
      console.warn('Resize error', e.message);
    }
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      this.resizeTable(event);
    } else if (isCell(event)) {
      const $target = $(event.target);
      if (event.shiftKey) {
        const $groupCells = matrix($target, this.selection.current).map((e) =>
          this.$root.find(`[data-cell="${e}"]`),
        );

        this.selection.selectGroup($groupCells);
      } else {
        this.selectCell($target);
      }
    }
  }

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
      const $next = this.getNextCell(code);
      this.selectCell($next);
    }
  }

  onInput(event) {
    this.updateTextInStore($(event.target).text());
  }

  selectCell($cell) {
    this.selection.select($cell);
    this.$emit('table:select', $cell);
    const styles = $cell.getStyles(Object.keys(defaultStyles));
    this.$dispatch(actionChangeStyles(styles));
  }
}
