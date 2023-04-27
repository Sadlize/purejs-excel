import ExcelComponent from 'core/ExcelComponent';

export default class Container extends ExcelComponent {
  static className = 'header__container';

  constructor($root) {
    super($root, {
      name: 'Container',
    });
  }

  render() {
    return `
      <a href="/" class="header__brand-logo">
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 36 36" preserveAspectRatio="none">
          <g xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M10 13h20v20H10z"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.76289 35.1004H28.2379c1.3053 0 2.3625-1.0435 2.3625-2.3318V9.45039l-8.55-8.549999H7.76289c-1.30528 0-2.3625 1.043489-2.3625 2.331819V32.7686c0 1.2883 1.05722 2.3318 2.3625 2.3318Zm11.25001-20.7h7.0875v11.7H9.90039v-11.7h9.11251Zm-1.9125 1.8h-5.4v3.15h5.4v-3.15Zm-5.4 4.95v3.15h5.4v-3.15h-5.4Zm7.2 3.15h5.4v-3.15h-5.4v3.15Zm0-4.95h5.4v-3.15h-5.4v3.15Z" fill="#00AC47"/>
            <path d="m22.0508.900391 8.55 8.549999h-8.55V.900391Z" fill="#00832D"/>
          </g>
        </svg>
      </a>
      <div class="header__titleBar">
        <input class="header__input" type="text" aria-label="Rename" value="Untitled spreadsheet" id="title-input"/>
        <div class="header__menuBar">
          <button>File</button>
          <button>Edit</button>
          <button>View</button>
          <button>Insert</button>
          <button>Format</button>
          <button>Data</button>
          <button>Tools</button>
          <button>Extensions</button>
          <button>Help</button>
        </div>
      </div>
      <div class="header__titleBar-buttons">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" preserveAspectRatio="none">
            <g xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 6.01V4H2v6h6V8H5.09C6.47 5.61 9.04 4 12 4c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8H2c0 5.52 4.48 10 10.01 10C17.53 22 22 17.52 22 12S17.53 2 12.01 2C8.73 2 5.83 3.58 4 6.01ZM13 6v6l4.23 2.94-1.26 1.55L11 13V6h2Z" fill="#000"/></g>
          </svg>
        </button>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" preserveAspectRatio="none">
            <g xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.99 4C21.99 2.9 21.1 2 20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H18L22 22L21.99 4ZM4 16V4H20V16H4ZM18 12H6V14H18V12ZM6 9H18V11H6V9ZM18 6H6V8H18V6Z" fill="#000"/></g>
          </svg>
        </button>
        <button id="meet-in-editors">
          <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" preserveAspectRatio="none">
            <g xmlns="http://www.w3.org/2000/svg"><path fill="#000" d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V9l5-5h9q.825 0 1.413.588Q18 5.175 18 6v4.5l4-4v11l-4-4V18q0 .825-.587 1.413Q16.825 20 16 20Zm0-2h12V6H8l-4 4Z"/>
            </g>
          </svg>
          <span class="menu-button-dropdown"></span>
        </button>
      </div>
    `;
  }
}
