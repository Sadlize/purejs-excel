import ExcelComponent from 'core/ExcelComponent';
// import $ from 'core/DOM';
import ToolbarTemplate from 'components/modules/header/Toolbar/Toolbar.template';

export default class Toolbar extends ExcelComponent {
  static className = 'header__toolbar';

  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      // listeners: ['click'],
      ...options,
    });
  }

  // // eslint-disable-next-line class-methods-use-this
  // onClick(event) {
  //   const button = event.target.closest('button');
  //   if (button) {
  //     const $target = $(button);
  //     console.log($target);
  //   }
  // }

  render() {
    return ToolbarTemplate();
  }
}
