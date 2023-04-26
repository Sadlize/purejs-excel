import ExcelComponent from 'core/ExcelComponent';

export default class Table extends ExcelComponent {
  static className = 'excel';

  render() {
    return `
      <div class="excel__row">
        <div class="excel__row-info"></div>
        <div class="excel__row-data">
          <div class="excel__column">A</div>
          <div class="excel__column">B</div>
          <div class="excel__column">C</div>
        </div>
      </div>
      <div class="excel__row">
        <div class="excel__row-info">1</div>
        <div class="excel__row-data">
          <div contenteditable class="cell selected" spellcheck="false">A1</div>
          <div contenteditable class="cell">B1</div>
          <div contenteditable class="cell">C1</div>
        </div>
      </div>
      <div class="excel__row">
        <div class="excel__row-info">2</div>
        <div class="excel__row-data">
          <div contenteditable class="cell">A2</div>
          <div contenteditable class="cell">B2</div>
          <div contenteditable class="cell">C2</div>
        </div>
      </div>
    `;
  }
}
