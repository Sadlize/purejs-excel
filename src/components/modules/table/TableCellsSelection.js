export default class TableCellsSelection {
  static className = 'selected';

  constructor() {
    this.group = [];
    this.current = null;
  }

  clear() {
    this.group.forEach(($el) => $el.removeClass(TableCellsSelection.className));
    this.group = [];
  }

  select($el) {
    this.clear();
    $el.focus().addClass(TableCellsSelection.className);
    this.group.push($el);
    this.current = $el;
  }

  selectGroup($group) {
    this.clear();
    this.group = $group;
    this.group.forEach(($el) => $el.addClass(TableCellsSelection.className));
  }
}
