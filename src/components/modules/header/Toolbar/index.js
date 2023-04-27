import ExcelComponent from 'core/ExcelComponent';

export default class Toolbar extends ExcelComponent {
  static className = 'header__toolbar';

  constructor($root) {
    super($root, {
      name: 'Toolbar',
    });
  }

  render() {
    return `
      <!--Undo-->
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 20 20" preserveAspectRatio="none">
          <g xmlns="http://www.w3.org/2000/svg"><path d="M6 16v-1.5h6q1.042 0 1.771-.729.729-.729.729-1.771 0-1.042-.729-1.771Q13.042 9.5 12 9.5H6.875l1.937 1.938L7.75 12.5 4 8.75 7.75 5l1.062 1.062L6.875 8H12q1.667 0 2.833 1.167Q16 10.333 16 12q0 1.667-1.167 2.833Q13.667 16 12 16Z" fill="#444746"/></g>
        </svg>
      </button>
      <!--Redo-->
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 20 20" preserveAspectRatio="none">
          <g xmlns="http://www.w3.org/2000/svg"><path d="M8 16q-1.667 0-2.833-1.167Q4 13.667 4 12q0-1.667 1.167-2.833Q6.333 8 8 8h5.125l-1.937-1.938L12.25 5 16 8.75l-3.75 3.75-1.062-1.062L13.125 9.5H8q-1.042 0-1.771.729Q5.5 10.958 5.5 12q0 1.042.729 1.771.729.729 1.771.729h6V16Z" fill="#444746"/></g>
        </svg>
      </button>
      <!--Print-->
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 20 20" preserveAspectRatio="none">
          <g xmlns="http://www.w3.org/2000/svg"><path d="M13.5 7V4.5h-7V7H5V3h10v4Zm-10 1.5h13.021H5Zm11.25 2q.312 0 .531-.219.219-.219.219-.531 0-.312-.219-.531Q15.062 9 14.75 9q-.312 0-.531.219Q14 9.438 14 9.75q0 .312.219.531.219.219.531.219Zm-1.25 5v-3h-7v3ZM15 17H5v-3H2V9q0-.833.583-1.417Q3.167 7 4 7h12q.833 0 1.417.583Q18 8.167 18 9v5h-3Zm1.521-4.5V9.292q0-.334-.25-.563-.25-.229-.583-.229H4.292q-.334 0-.563.229-.229.229-.229.563V12.5H5V11h10v1.5Z" fill="#444746"/></g>
        </svg>
      </button>
      <!--Paint format-->
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 20 20" preserveAspectRatio="none">
          <g xmlns="http://www.w3.org/2000/svg"><path d="M12 19H9q-.417 0-.708-.292Q8 18.417 8 18v-4q0-.417.292-.708Q8.583 13 9 13h.75v-3H3.5q-.625 0-1.062-.438Q2 9.125 2 8.5V5.25q0-.625.438-1.062.437-.438 1.062-.438H5V3q0-.417.292-.708Q5.583 2 6 2h9q.417 0 .708.292Q16 2.583 16 3v3q0 .417-.292.708Q15.417 7 15 7H6q-.417 0-.708-.292Q5 6.417 5 6v-.75H3.5V8.5h6.25q.625 0 1.062.438.438.437.438 1.062v3H12q.417 0 .708.292.292.291.292.708v4q0 .417-.292.708Q12.417 19 12 19ZM6.5 3.5v2Zm3 14h2v-3h-2Zm-3-12h8v-2h-8Zm3 12h2-2Z" fill="#444746"/></g>
        </svg>
      </button>
      <div class="header__toolbar-separator"></div>
      <!--Format as currency-->
      <button>$</button>
      <!--Format as percent-->
      <button>%</button>
      <!--Decrease decimals places-->
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 20 20" preserveAspectRatio="none">
          <g xmlns="http://www.w3.org/2000/svg"><path d="M2 9h2v2H2zM14.06 16.94l-1.19-1.19H18v-1.5h-5.13l1.19-1.19L13 12l-3 3 3 3zM11 8.25v-3.5C11 3.23 9.77 2 8.25 2S5.5 3.23 5.5 4.75v3.5C5.5 9.77 6.73 11 8.25 11S11 9.77 11 8.25zm-1.5 0c0 .69-.56 1.25-1.25 1.25S7 8.94 7 8.25v-3.5c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25v3.5z" fill="#444746"/></g>
        </svg>
      </button>
      <!--Increase decimals places-->
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 20 20" preserveAspectRatio="none">
          <g xmlns="http://www.w3.org/2000/svg"><path d="M2 9h2v2H2zM13.94 13.06l1.19 1.19H10v1.5h5.13l-1.19 1.19L15 18l3-3-3-3zM15.25 2c-1.52 0-2.75 1.23-2.75 2.75v3.5c0 1.52 1.23 2.75 2.75 2.75S18 9.77 18 8.25v-3.5C18 3.23 16.77 2 15.25 2zm1.25 6.25c0 .69-.56 1.25-1.25 1.25S14 8.94 14 8.25v-3.5c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25v3.5zM11 8.25v-3.5C11 3.23 9.77 2 8.25 2S5.5 3.23 5.5 4.75v3.5C5.5 9.77 6.73 11 8.25 11S11 9.77 11 8.25zm-1.5 0c0 .69-.56 1.25-1.25 1.25S7 8.94 7 8.25v-3.5c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25v3.5z" fill="#444746"/></g>
        </svg>
      </button>
      <!--More formats-->
      <button>123</button>
      <div class="header__toolbar-separator"></div>
      <!--Decrease font size-->
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 20 20" preserveAspectRatio="none">
          <g xmlns="http://www.w3.org/2000/svg"><path d="M5 10.75v-1.5h10v1.5Z" fill="#444746"/></g>
        </svg>
      </button>
      <!--Font size-->
      <input class="header__input" type="text" aria-label="Rename" value="10" id="fontSize-input"/>
      <!--Increase font size-->
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 20 20" preserveAspectRatio="none">
          <g xmlns="http://www.w3.org/2000/svg"><path d="M9.25 15v-4.25H5v-1.5h4.25V5h1.5v4.25H15v1.5h-4.25V15Z" fill="#444746"/></g>
        </svg>
      </button>
      <div class="header__toolbar-separator"></div>
      <!--Bold-->
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 20 20" preserveAspectRatio="none">
          <g xmlns="http://www.w3.org/2000/svg"><path d="M6 15V4h4.292q1.416 0 2.396.833.979.834.979 2.042 0 .792-.386 1.406-.385.615-1.093.969v.104q.833.271 1.343.979.511.709.511 1.605 0 1.354-1.011 2.208-1.01.854-2.593.854Zm2.062-6.5h2.084q.625 0 1.062-.385.438-.386.438-.948 0-.542-.417-.927-.417-.386-1.021-.386H8.062Zm0 4.604h2.313q.729 0 1.167-.375.437-.375.437-1.021 0-.666-.448-1.052-.448-.385-1.219-.385h-2.25Z" fill="#444746"/></g>
        </svg>
      </button>
      <!--Italic-->
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 20 20" preserveAspectRatio="none">
          <g xmlns="http://www.w3.org/2000/svg"><path d="M5 16v-2h2.375l3.187-8H8V4h7v2h-2.271l-3.208 8H12v2Z" fill="#444746"/></g>
        </svg>
      </button>
      <!--Strikethrough-->
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 20 20" preserveAspectRatio="none">
          <g xmlns="http://www.w3.org/2000/svg"><path d="M10.125 15.917q-1.5 0-2.625-.875T6 12.729l1.688-.687q.333 1.062.968 1.604.636.542 1.511.542.937 0 1.489-.448t.552-1.198q0-.334-.125-.615-.125-.281-.375-.51h2.146q.104.229.136.489.031.261.031.615 0 1.5-1.083 2.448-1.084.948-2.813.948ZM2 9.917v-1.5h16v1.5Zm8-6q1.333 0 2.208.562.875.563 1.417 1.792L12 6.979q-.229-.625-.76-1.01-.532-.386-1.198-.386-.771 0-1.282.375-.51.375-.552.959H6.396q.042-1.313 1.062-2.157Q8.479 3.917 10 3.917Z" fill="#444746"/></g>
        </svg>
      </button>
      <!--Text color-->
      <button class="color-menu-button-indicator">
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 20 16" preserveAspectRatio="none">
          <g xmlns="http://www.w3.org/2000/svg"><path d="m5.354 14 1.875-5 1.875-5h1.792l3.75 10h-1.729l-.896-2.562H8L7.083 14H5.354ZM8.5 10h3l-1.458-4.042h-.084L8.5 10Z" fill="#444746"/></g>
        </svg>
      </button>
      <div class="header__toolbar-separator"></div>
      <!--Fill color-->
      <button class="color-menu-button-indicator">
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 20 16" preserveAspectRatio="none">
          <g xmlns="http://www.w3.org/2000/svg"><path d="M4.5 1.062 5.562 0l7.042 7.042q.417.416.406.979-.01.562-.406.958l-3.625 3.625q-.417.417-.979.417t-.979-.417L3.396 8.958Q3 8.562 2.979 8q-.021-.562.417-.979L6.938 3.5Zm3.5 3.5L4.562 8h.021-.021 6.876ZM15.25 14q-.729 0-1.24-.51-.51-.511-.51-1.24 0-.417.219-.885.219-.469.698-1.136.166-.229.385-.5t.448-.541q.208.27.427.531.219.26.406.51.334.479.625.979.292.5.292 1.042 0 .729-.51 1.24-.511.51-1.24.51Z" fill="#444746"/></g>
        </svg>
      </button>
      <!--Borders-->
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 20 20" preserveAspectRatio="none">
          <g xmlns="http://www.w3.org/2000/svg"><path d="M3 17V3h14v14Zm12.5-1.5v-4.75h-4.75v4.75Zm0-11h-4.75v4.75h4.75Zm-11 0v4.75h4.75V4.5Zm0 11h4.75v-4.75H4.5Z" fill="#444746"/></g>
        </svg>
      </button>
      <div class="header__toolbar-separator"></div>
      <!--Horizontal align-->
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 20 20" preserveAspectRatio="none">
          <g xmlns="http://www.w3.org/2000/svg"><path d="M3 17v-1.5h14V17Zm0-3.125v-1.5h10v1.5Zm0-3.125v-1.5h14v1.5Zm0-3.125v-1.5h10v1.5ZM3 4.5V3h14v1.5Z" fill="#444746"/></g>
        </svg>
      </button>
      <!--Vertical align-->
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 20 20" preserveAspectRatio="none">
          <g xmlns="http://www.w3.org/2000/svg"><path d="M4 17v-1.5h12V17Zm6-3-4-4 1.062-1.062 2.188 2.187V3h1.5v8.125l2.188-2.187L14 10Z" fill="#444746"/></g>
        </svg>
      </button>
      <!--Text wrapping-->
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 20 20" preserveAspectRatio="none">
          <g xmlns="http://www.w3.org/2000/svg"><path d="M10.5 6.5h-4V8h4c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H9.38v-.01l1.05-1.05-1.05-1.06-2.88 2.87 2.88 2.88 1.06-1.06-1.07-1.07h1.13c1.66 0 3-1.34 3-3s-1.34-3-3-3zM4 4h1.5v12H4zM14.5 4H16v12h-1.5z" fill="#444746"/></g>
        </svg>
      </button>
      <!--Text rotation-->
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 20 20" preserveAspectRatio="none">
          <g xmlns="http://www.w3.org/2000/svg"><path d="M4 15.25v-1.5h10.125l-.687-.688L14.5 12l2.5 2.5-2.5 2.5-1.062-1.062.687-.688ZM5.312 12l3.396-9h1.584l3.396 9h-1.563l-.813-2.292H7.688L6.875 12Zm2.855-3.604h2.687L9.542 4.667h-.084Z" fill="#444746"/></g>
        </svg>
      </button>
      <div class="header__toolbar-separator"></div>
      <!--Insert link-->
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 20 20" preserveAspectRatio="none">
          <g xmlns="http://www.w3.org/2000/svg"><path d="M9 14H6q-1.667 0-2.833-1.167Q2 11.667 2 10q0-1.667 1.167-2.833Q4.333 6 6 6h3v1.5H6q-1.042 0-1.771.729Q3.5 8.958 3.5 10q0 1.042.729 1.771.729.729 1.771.729h3Zm-2-3.25v-1.5h6v1.5ZM11 14v-1.5h3q1.042 0 1.771-.729.729-.729.729-1.771 0-1.042-.729-1.771Q15.042 7.5 14 7.5h-3V6h3q1.667 0 2.833 1.167Q18 8.333 18 10q0 1.667-1.167 2.833Q15.667 14 14 14Z" fill="#444746"/></g>
        </svg>
      </button>
      <!--Insert comment-->
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 20 20" preserveAspectRatio="none">
          <g xmlns="http://www.w3.org/2000/svg"><path d="M9.25 12h1.5V9.25h2.75v-1.5h-2.75V5h-1.5v2.75H6.5v1.5h2.75ZM2 18V3.5q0-.625.438-1.062Q2.875 2 3.5 2h13q.625 0 1.062.438Q18 2.875 18 3.5v10q0 .625-.438 1.062Q17.125 15 16.5 15H5Zm1.5-4.5h13v-10h-13v10Zm0 0v-10 10Z" fill="#444746"/></g>
        </svg>
      </button>
      <!--Insert chart-->
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 20 20" preserveAspectRatio="none">
          <g xmlns="http://www.w3.org/2000/svg"><path d="M6 14h1.5V8H6Zm6.5 0H14v-3h-1.5Zm-3.25 0h1.5V6h-1.5ZM4.5 17q-.625 0-1.062-.438Q3 16.125 3 15.5v-11q0-.625.438-1.062Q3.875 3 4.5 3h11q.625 0 1.062.438Q17 3.875 17 4.5v11q0 .625-.438 1.062Q16.125 17 15.5 17Zm0-1.5h11v-11h-11v11Zm0-11v11-11Z" fill="#444746"/></g>
        </svg>
      </button>
      <!--Create a filter-->
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 20 20" preserveAspectRatio="none">
          <g xmlns="http://www.w3.org/2000/svg"><path d="M9.5 16q-.208 0-.354-.146T9 15.5v-4.729L4.104 4.812q-.187-.25-.052-.531Q4.188 4 4.5 4h11q.312 0 .448.281.135.281-.052.531L11 10.771V15.5q0 .208-.146.354T10.5 16Zm.5-6.375L13.375 5.5H6.604Zm0 0Z" fill="#444746"/></g>
        </svg>
      </button>
      <!--Functions-->
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 20 20" preserveAspectRatio="none">
          <g xmlns="http://www.w3.org/2000/svg"><path d="M6 16v-1.792L10.292 10 6 5.792V4h8v2H8.833l4 4-4 4H14v2Z" fill="#444746"/></g>
        </svg>
      </button>
<!--        <button>-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 20 20" preserveAspectRatio="none">-->
<!--            <g xmlns="http://www.w3.org/2000/svg"><path d="M10 16q-.625 0-1.062-.438Q8.5 15.125 8.5 14.5t.438-1.062Q9.375 13 10 13t1.062.438q.438.437.438 1.062t-.438 1.062Q10.625 16 10 16Zm0-4.5q-.625 0-1.062-.438Q8.5 10.625 8.5 10t.438-1.062Q9.375 8.5 10 8.5t1.062.438q.438.437.438 1.062t-.438 1.062q-.437.438-1.062.438ZM10 7q-.625 0-1.062-.438Q8.5 6.125 8.5 5.5t.438-1.062Q9.375 4 10 4t1.062.438q.438.437.438 1.062t-.438 1.062Q10.625 7 10 7Z" fill="#444746"/></g>-->
<!--          </svg>-->
<!--        </button>-->
    `;
  }
}
