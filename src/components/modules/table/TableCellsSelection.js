export default class TableCellsSelection {
  static className = 'selected';

  constructor() {
    this.group = [];
  }

  clear() {
    this.group.forEach(($el) => $el.removeClass(TableCellsSelection.className));
    this.group = [];
  }

  select($el) {
    this.clear();
    this.group.push($el);
    $el.addClass(TableCellsSelection.className);
  }

  // selectGroup() {}
}
