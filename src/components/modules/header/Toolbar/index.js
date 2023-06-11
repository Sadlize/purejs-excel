import ExcelStateComponent from 'core/ExcelStateComponent';
import $ from 'core/DOM';
import ToolbarTemplate, {
  toolbarElements,
} from 'components/modules/header/Toolbar/Toolbar.template';
import { objectFind } from 'utils/helpers';

export default class Toolbar extends ExcelStateComponent {
  static className = 'header__toolbar';

  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
      ...options,
    });
  }

  onClick(event) {
    const button = event.target.closest('button');
    if (button) {
      const $target = $(button);
      const dataAttrValue = $target.data.toolbarElement;
      const toolbarElementObject = objectFind(
        toolbarElements(this.state),
        'toolbarElement',
        dataAttrValue,
      );
      const changes = toolbarElementObject.value;
      this.setState(changes);
    }
  }

  prepare() {
    const initialState = {
      textAlign: 'left',
      fontWeight: 'normal',
      textDecoration: 'none',
      fontStyle: 'normal',
    };
    this.initState(initialState);
  }

  get template() {
    return ToolbarTemplate(this.state);
  }

  render() {
    return this.template;
  }
}
