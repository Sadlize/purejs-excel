import * as Icons from 'components/modules/header/Toolbar/Toolbar.icons';
import { concatStr } from 'utils/helpers';

export function createElementHTML(element) {
  const className =
    concatStr(' ', [element.className, element.active ? 'active' : '']) || '';
  const toolbarElement = element.toolbarElement
    ? `data-toolbar-element="${element.toolbarElement}"`
    : '';
  const disabled = element.disabled ? 'disabled' : '';
  switch (element.type) {
    case 'button':
      return `
        <button type="button" class="${className}" ${toolbarElement} ${disabled}>
          ${element.icon}
        </button>
      `;
    case 'input':
      return `
        <input
          class="${className}"
          ${toolbarElement}
          type="text"
          aria-label="${element.ariaLabel}"
          value="10"
          id="${element.id}"
        />
      `;
    default:
      return console.error(new Error('The element is not provided type'));
  }
}

function createToolbarHTML(sector, index) {
  return `
    ${index !== 0 ? `<div class="header__toolbar-separator"></div>` : ''}
    ${sector.map(createElementHTML).join('')}
  `;
}

export const toolbarElements = (state = {}) => [
  [
    {
      toolbarElement: 'Undo',
      type: 'button',
      icon: Icons.Undo,
      active: false,
      value: {},
      disabled: true,
    },
    {
      toolbarElement: 'Redo',
      type: 'button',
      icon: Icons.Redo,
      active: false,
      value: {},
      disabled: true,
    },
    {
      toolbarElement: 'Print',
      type: 'button',
      icon: Icons.Print,
      active: false,
      value: {},
      disabled: true,
    },
    {
      toolbarElement: 'Paint format',
      type: 'button',
      icon: Icons.PaintFormat,
      active: false,
      value: {},
      disabled: true,
    },
  ],
  [
    {
      toolbarElement: 'Format as currency',
      type: 'button',
      icon: '$',
      active: false,
      value: {},
      disabled: true,
    },
    {
      toolbarElement: 'Format as percent',
      type: 'button',
      icon: '%',
      active: false,
      value: {},
      disabled: true,
    },
    {
      toolbarElement: 'Decrease decimals places',
      type: 'button',
      icon: Icons.DecreaseDecimalsPlaces,
      active: false,
      value: {},
      disabled: true,
    },
    {
      toolbarElement: 'Increase decimals places',
      type: 'button',
      icon: Icons.IncreaseDecimalsPlaces,
      active: false,
      value: {},
      disabled: true,
    },
    {
      toolbarElement: 'More formats',
      type: 'button',
      icon: '123',
      active: false,
      value: {},
      disabled: true,
    },
  ],
  [
    {
      toolbarElement: 'Decrease font size',
      type: 'button',
      icon: Icons.DecreaseFontSize,
      active: false,
      value: {},
      disabled: true,
    },
    {
      toolbarElement: 'Font size',
      type: 'input',
      className: 'header__input',
      ariaLabel: 'Rename',
      id: 'fontSize-input',
      icon: Icons.DecreaseFontSize,
      value: {},
      disabled: true,
    },
    {
      toolbarElement: 'Increase font size',
      type: 'button',
      icon: Icons.IncreaseFontSize,
      active: false,
      value: {},
      disabled: true,
    },
  ],
  [
    {
      toolbarElement: 'Bold',
      type: 'button',
      icon: Icons.Bold,
      active: state.fontWeight === 'bold',
      value: { fontWeight: state.fontWeight === 'bold' ? '' : 'bold' },
    },
    {
      toolbarElement: 'Italic',
      type: 'button',
      icon: Icons.Italic,
      active: state.fontStyle === 'italic',
      value: {
        fontStyle: state.fontStyle === 'italic' ? '' : 'italic',
      },
    },
    {
      toolbarElement: 'Strikethrough',
      type: 'button',
      icon: Icons.Strikethrough,
      active: state.textDecoration === 'line-through',
      value: {
        textDecoration:
          state.textDecoration === 'line-through' ? '' : 'line-through',
      },
    },
    {
      toolbarElement: 'Text color',
      type: 'button',
      icon: Icons.TextColor,
      className: 'color-menu-button-indicator',
      active: state.color === 'red',
      value: {
        color: state.color === 'red' ? '' : 'red',
      },
    },
  ],
  [
    {
      toolbarElement: 'Fill color',
      type: 'button',
      icon: Icons.FillColor,
      className: 'color-menu-button-indicator',
      active: false,
      value: {},
      disabled: true,
    },
    {
      toolbarElement: 'Borders',
      type: 'button',
      icon: Icons.Borders,
      active: false,
      value: {},
      disabled: true,
    },
  ],
  [
    {
      toolbarElement: 'Horizontal align',
      type: 'button',
      icon: Icons.HorizontalAlign,
      active: false,
      value: {},
      disabled: true,
    },
    {
      toolbarElement: 'Vertical align',
      type: 'button',
      icon: Icons.VerticalAlign,
      active: false,
      value: {},
      disabled: true,
    },
    {
      toolbarElement: 'Text wrapping',
      type: 'button',
      icon: Icons.TextWrapping,
      active: false,
      value: {},
      disabled: true,
    },
    {
      toolbarElement: 'Text rotation',
      type: 'button',
      icon: Icons.TextRotation,
      active: false,
      value: {},
      disabled: true,
    },
  ],
  [
    {
      toolbarElement: 'Insert link',
      type: 'button',
      icon: Icons.InsertLink,
      active: false,
      value: {},
      disabled: true,
    },
    {
      toolbarElement: 'Insert comment',
      type: 'button',
      icon: Icons.InsertComment,
      active: false,
      value: {},
      disabled: true,
    },
    {
      toolbarElement: 'Insert chart',
      type: 'button',
      icon: Icons.InsertChart,
      active: false,
      value: {},
      disabled: true,
    },
    {
      toolbarElement: 'Create a filter',
      type: 'button',
      icon: Icons.CreateFilter,
      active: false,
      value: {},
      disabled: true,
    },
    {
      toolbarElement: 'Functions',
      type: 'button',
      icon: Icons.Functions,
      active: false,
      value: {},
      disabled: true,
    },
    // {
    //   toolbarElement: 'More',
    //   type: 'button',
    //   icon: Icons.More,
    //   active: false,
    //   value: {},
    // },
  ],
];

function ToolbarTemplate(state) {
  return toolbarElements(state).map(createToolbarHTML).join('');
}

export default ToolbarTemplate;
