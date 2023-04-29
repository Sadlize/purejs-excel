import ExcelComponent from 'core/ExcelComponent';
import TableTemplate from 'components/modules/table/table.template';
import $ from 'core/DOM';

export default class Table extends ExcelComponent {
  static className = 'excel';

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'mouseup'],
    });
  }

  // eslint-disable-next-line class-methods-use-this
  onMousedown(event) {
    if (event.target.dataset.resize) {
      const $resizer = $(event.target);
      const $parent = $resizer.closest('[data-type="resizable"]');
      const initCords = $parent.getCoords();

      document.onmousemove = (e) => {
        const delta = e.pageX - initCords.right;
        const value = initCords.width + delta;
        $parent.$el.style.width = `${value}px`;
      };

      document.onmouseup = () => {
        document.onmousemove = null;
      };

      event.target.children[0].style.opacity = '1';
    }
  }

  // eslint-disable-next-line class-methods-use-this
  onMouseup(event) {
    if (event.target.dataset.resize) {
      event.target.children[0].style.opacity = '0';
    }
  }

  render() {
    return TableTemplate(50);
  }
}
