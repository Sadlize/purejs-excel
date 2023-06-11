import * as Icons from 'components/modules/header/Toolbar/Toolbar.icons';

export function createElementHTML(element) {
  const className = element.className ? `class="${element.className}"` : '';
  const toolbarElement = element.toolbarElement
    ? `data-toolbar-element="${element.toolbarElement}"`
    : '';
  switch (element.type) {
    case 'button':
      return `
        <button ${className} ${toolbarElement}>
          ${element.icon}
        </button>
      `;
    case 'input':
      return `
        <input
          ${className}
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
  // [
  //   {
  //     toolbarElement: 'Undo',
  //     type: 'button',
  //     icon: Icons.Undo,
  //     active: false,
  //     value: {},
  //   },
  //   {
  //     toolbarElement: 'Redo',
  //     type: 'button',
  //     icon: Icons.Redo,
  //     active: false,
  //     value: {},
  //   },
  //   {
  //     toolbarElement: 'Print',
  //     type: 'button',
  //     icon: Icons.Print,
  //     active: false,
  //     value: {},
  //   },
  //   {
  //     toolbarElement: 'Paint format',
  //     type: 'button',
  //     icon: Icons.PaintFormat,
  //     active: false,
  //     value: {},
  //   },
  // ],
  // [
  //   {
  //     toolbarElement: 'Format as currency',
  //     type: 'button',
  //     icon: '$',
  //     active: false,
  //     value: {},
  //   },
  //   {
  //     toolbarElement: 'Format as percent',
  //     type: 'button',
  //     icon: '%',
  //     active: false,
  //     value: {},
  //   },
  //   {
  //     toolbarElement: 'Decrease decimals places',
  //     type: 'button',
  //     icon: Icons.DecreaseDecimalsPlaces,
  //     active: false,
  //     value: {},
  //   },
  //   {
  //     toolbarElement: 'Increase decimals places',
  //     type: 'button',
  //     icon: Icons.IncreaseDecimalsPlaces,
  //     active: false,
  //     value: {},
  //   },
  //   {
  //     toolbarElement: 'More formats',
  //     type: 'button',
  //     icon: '123',
  //     active: false,
  //     value: {},
  //   },
  // ],
  // [
  //   {
  //     toolbarElement: 'Decrease font size',
  //     type: 'button',
  //     icon: Icons.DecreaseFontSize,
  //     active: false,
  //     value: {},
  //   },
  //   {
  //     toolbarElement: 'Font size',
  //     type: 'input',
  //     className: 'header__input',
  //     ariaLabel: 'Rename',
  //     id: 'fontSize-input',
  //     icon: Icons.DecreaseFontSize,
  //     value: {},
  //   },
  //   {
  //     toolbarElement: 'Increase font size',
  //     type: 'button',
  //     icon: Icons.IncreaseFontSize,
  //     active: false,
  //     value: {},
  //   },
  // ],
  [
    {
      toolbarElement: 'Bold',
      type: 'button',
      icon: Icons.Bold,
      active: state.fontWeight === 'bold',
      value: { fontWeight: state.fontWeight === 'bold' ? 'normal' : 'bold' },
    },
    // {
    //   toolbarElement: 'Italic',
    //   type: 'button',
    //   icon: Icons.Italic,
    //   active: false,
    //   value: {},
    // },
    // {
    //   toolbarElement: 'Strikethrough',
    //   type: 'button',
    //   icon: Icons.Strikethrough,
    //   active: false,
    //   value: {},
    // },
    // {
    //   toolbarElement: 'Text color',
    //   type: 'button',
    //   icon: Icons.TextColor,
    //   className: 'color-menu-button-indicator',
    //   active: false,
    //   value: {},
    // },
  ],
  // [
  //   {
  //     toolbarElement: 'Fill color',
  //     type: 'button',
  //     icon: Icons.FillColor,
  //     className: 'color-menu-button-indicator',
  //     active: false,
  //     value: {},
  //   },
  //   {
  //     toolbarElement: 'Borders',
  //     type: 'button',
  //     icon: Icons.Borders,
  //     active: false,
  //     value: {},
  //   },
  // ],
  // [
  //   {
  //     toolbarElement: 'Horizontal align',
  //     type: 'button',
  //     icon: Icons.HorizontalAlign,
  //     active: false,
  //     value: {},
  //   },
  //   {
  //     toolbarElement: 'Vertical align',
  //     type: 'button',
  //     icon: Icons.VerticalAlign,
  //     active: false,
  //     value: {},
  //   },
  //   {
  //     toolbarElement: 'Text wrapping',
  //     type: 'button',
  //     icon: Icons.TextWrapping,
  //     active: false,
  //     value: {},
  //   },
  //   {
  //     toolbarElement: 'Text rotation',
  //     type: 'button',
  //     icon: Icons.TextRotation,
  //     active: false,
  //     value: {},
  //   },
  // ],
  // [
  //   {
  //     toolbarElement: 'Insert link',
  //     type: 'button',
  //     icon: Icons.InsertLink,
  //     active: false,
  //     value: {},
  //   },
  //   {
  //     toolbarElement: 'Insert comment',
  //     type: 'button',
  //     icon: Icons.InsertComment,
  //     active: false,
  //     value: {},
  //   },
  //   {
  //     toolbarElement: 'Insert chart',
  //     type: 'button',
  //     icon: Icons.InsertChart,
  //     active: false,
  //     value: {},
  //   },
  //   {
  //     toolbarElement: 'Create a filter',
  //     type: 'button',
  //     icon: Icons.CreateFilter,
  //     active: false,
  //     value: {},
  //   },
  //   {
  //     toolbarElement: 'Functions',
  //     type: 'button',
  //     icon: Icons.Functions,
  //     active: false,
  //     value: {},
  //   },
  //   // {
  //   //   toolbarElement: 'More',
  //   //   type: 'button',
  //   //   icon: Icons.More,
  //   //   active: false,
  //   //   value: {},
  //   // },
  // ],
];

function ToolbarTemplate() {
  return toolbarElements().map(createToolbarHTML).join('');
}

export default ToolbarTemplate;
