import * as Icons from 'components/modules/header/Toolbar/Toolbar.icons';

function createElement(element) {
  switch (element.type) {
    case 'button':
      return `
        <button ${element.className ? `class="${element.className}"` : ''}>
          ${element.icon}
        </button>
      `;
    case 'input':
      return `<input class="${element.className}" type="text" aria-label="${element.ariaLabel}" value="10" id="${element.id}"/>`;
    default:
      return console.error(new Error('The element is not provided type'));
  }
}

function createToolbar(sector, index) {
  return `
    ${index !== 0 ? `<div class="header__toolbar-separator"></div>` : ''}
    ${sector.map(createElement).join('')}
  `;
}

function ToolbarTemplate() {
  const elements = [
    [
      {
        type: 'button',
        icon: Icons.Undo,
        active: false,
        value: {},
      },
      {
        type: 'button',
        icon: Icons.Redo,
        active: false,
        value: {},
      },
      {
        type: 'button',
        icon: Icons.Print,
        active: false,
        value: {},
      },
      {
        type: 'button',
        icon: Icons.PaintFormat,
        active: false,
        value: {},
      },
    ],
    [
      {
        type: 'button',
        icon: '$',
        active: false,
        value: {},
      },
      {
        type: 'button',
        icon: '%',
        active: false,
        value: {},
      },
      {
        type: 'button',
        icon: Icons.DecreaseDecimalsPlaces,
        active: false,
        value: {},
      },
      {
        type: 'button',
        icon: Icons.IncreaseDecimalsPlaces,
        active: false,
        value: {},
      },
      {
        type: 'button',
        icon: '123',
        active: false,
        value: {},
      },
    ],
    [
      {
        type: 'button',
        icon: Icons.DecreaseFontSize,
        active: false,
        value: {},
      },
      // Font size
      // <input class="header__input" type="text" aria-label="Rename" value="10" id="fontSize-input"/>
      {
        type: 'input',
        className: 'header__input',
        ariaLabel: 'Rename',
        id: 'fontSize-input',
        icon: Icons.DecreaseFontSize,
        active: false,
        value: {},
      },
      {
        type: 'button',
        icon: Icons.IncreaseFontSize,
        active: false,
        value: {},
      },
    ],
    [
      {
        type: 'button',
        icon: Icons.Bold,
        active: false,
        value: {},
      },
      {
        type: 'button',
        icon: Icons.Italic,
        active: false,
        value: {},
      },
      {
        type: 'button',
        icon: Icons.Strikethrough,
        active: false,
        value: {},
      },
      {
        type: 'button',
        icon: Icons.TextColor,
        className: 'color-menu-button-indicator',
        active: false,
        value: {},
      },
    ],
    [
      {
        type: 'button',
        icon: Icons.FillColor,
        className: 'color-menu-button-indicator',
        active: false,
        value: {},
      },
      {
        type: 'button',
        icon: Icons.Borders,
        active: false,
        value: {},
      },
    ],
    [
      {
        type: 'button',
        icon: Icons.HorizontalAlign,
        active: false,
        value: {},
      },
      {
        type: 'button',
        icon: Icons.VerticalAlign,
        active: false,
        value: {},
      },
      {
        type: 'button',
        icon: Icons.TextWrapping,
        active: false,
        value: {},
      },
      {
        type: 'button',
        icon: Icons.TextRotation,
        active: false,
        value: {},
      },
    ],
    [
      {
        type: 'button',
        icon: Icons.InsertLink,
        active: false,
        value: {},
      },
      {
        type: 'button',
        icon: Icons.InsertComment,
        active: false,
        value: {},
      },
      {
        type: 'button',
        icon: Icons.InsertChart,
        active: false,
        value: {},
      },
      {
        type: 'button',
        icon: Icons.CreateFilter,
        active: false,
        value: {},
      },
      {
        type: 'button',
        icon: Icons.Functions,
        active: false,
        value: {},
      },
      // {
      //   icon: Icons.More,
      //   active: false,
      //   value: {},
      // },
    ],
  ];
  return elements.map(createToolbar).join('');
}

export default ToolbarTemplate;
