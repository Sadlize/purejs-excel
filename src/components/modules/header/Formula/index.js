import ExcelComponent from 'core/ExcelComponent';
import $ from 'core/DOM';

export default class Formula extends ExcelComponent {
  static className = 'header__formula';

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'keydown'],
      subscribe: ['currentText'],
      ...options,
    });
  }

  init() {
    super.init();

    this.$formula = this.$root.find('#formula-input');
    this.$emitSub('table:select', ($cell) => {
      this.$formula.text($cell.data.formula || '');
    });
  }

  storeChanged({ currentText }) {
    this.$formula.text(currentText);
  }

  onInput(event) {
    this.$emit('formula:input', $(event.target).text());
  }

  onKeydown(event) {
    const keys = ['Enter', 'Tab'];
    const { code } = event;
    if (keys.includes(code)) {
      event.preventDefault();
      this.$emit('formula:done', $(event.target).text());
    }
  }

  render() {
    return `
      <div class="header__formula-waffle">
        <input class="header__formula-waffle-input" type="text" aria-label="Rename" value="A1" id="waffle"/>
      </div>
      <div class="header__formula-separator"></div>
      <div class="header__formula-bar">
        <div class="header__formula-label">
          <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 18 18" preserveAspectRatio="none">
            <g xmlns="http://www.w3.org/2000/svg"><path d="M8 15v-1.5h1.458l2.063-2.5-2.063-2.5H8.312l-1.333 6.708q-.167.813-.739 1.302-.573.49-1.302.49-.813 0-1.376-.552Q3 15.896 3 15.167q0-.5.292-.834.291-.333.75-.333.416 0 .687.26.271.261.271.657 0 .125-.031.271-.031.145-.094.291.042.021.063.021H5q.208 0 .323-.146.115-.146.177-.437L6.792 8.5H5V7h2.083l.438-2.208q.167-.813.739-1.302Q8.833 3 9.562 3q.813 0 1.376.552.562.552.562 1.281 0 .5-.292.834-.291.333-.75.333-.416 0-.687-.26-.271-.261-.271-.657 0-.125.031-.27.031-.146.094-.292-.042-.021-.063-.021H9.5q-.208 0-.323.146-.115.146-.177.437L8.604 7H12v1.5h-.604L12.5 9.833 13.604 8.5H13V7h4v1.5h-1.438L13.479 11l2.083 2.5H17V15h-4v-1.5h.604L12.5 12.167 11.396 13.5H12V15Z" fill="#444746"/></g>
          </svg>
        </div>
        <input class="header__formula-bar-input" type="text" aria-label="Enter formula" value="" id="formula-input"/>
      </div>
    `;
  }
}
