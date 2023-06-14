import Page from 'core/Page';
import $ from 'core/DOM';
import {
  More,
  BrandLogo,
  DashboardGridView,
  DashboardSort,
  DashboardFilePicker,
} from 'src/icons';
import createRecordsTable from 'pages/dashboard.functions';
import { v4 as uuidv4 } from 'uuid';
import { excel } from 'src/constants';

class DashboardPage extends Page {
  // eslint-disable-next-line class-methods-use-this
  getRoot() {
    return $.create('div', 'dashboard').html(`
      <div class="dashboard__header">
        <div class="dashboard__header_menu">
          <button aria-label="Google apps" aria-expanded="false" role="button" tabindex="0">
            <svg focusable="false" viewBox="0 0 24 24">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>
          </button>
          <div class="dashboard__header_logo">${BrandLogo}</div>
          <span>Sheets</span>
        </div>
        <div class="dashboard__header_search">
          <form method="get" role="search">
            <button aria-label="Search" role="button">
              <svg focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path>
                <path d="M0,0h24v24H0V0z" fill="none"></path>
              </svg>
            </button>
            <input aria-label="Search bar" autocomplete="off" placeholder="Search" role="combobox" value="" name="q" type="text" dir="ltr" spellcheck="false" aria-autocomplete="list" aria-haspopup="true" aria-live="off" aria-owns="gs_sbt50">
          </form>
        </div>
        <div class="dashboard__header_apps">
          <button aria-label="Google apps" role="button">
            <svg focusable="false" viewBox="0 0 24 24">
              <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="dashboard__new">
        <div class="dashboard__view">
          <div class="dashboard__view__header-text" role="heading">
            <span>Start a new spreadsheet</span>
              <button aria-label="Google apps" role="button">
                ${More}
              </button>
          </div>
          <div class="dashboard__template">
            <a class="dashboard__template-create" href="#${excel}/${uuidv4()}">
              <img src="https://ssl.gstatic.com/docs/templates/thumbnails/sheets-blank-googlecolors.png" alt="">
            </a>
            <div title="Blank" class="dashboard__template-title">Blank</div>
          </div>
        </div>
      </div>
      <div class="dashboard__table dashboard__view">
        <div class="dashboard__list-header">
          <span class="dashboard__list-header_title">Название</span>
          <span class="dashboard__list-header_owner">Owned by anyone</span>
          <span class="dashboard__list-header_time">Last opened by me</span>
          <div class="dashboard__list-header_buttons">
            <button>${DashboardGridView}</button>
            <button>${DashboardSort}</button>
            <button>${DashboardFilePicker}</button>
          </div>
        </div>
        <ul class="dashboard__list">
          ${createRecordsTable()}
        </ul>
      </div>
    `);
  }
}

export default DashboardPage;
