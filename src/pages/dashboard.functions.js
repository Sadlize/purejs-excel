import { More, SpreadsheetLogo } from 'src/icons';
import { storage } from 'utils/helpers';
import { excel } from 'src/constants';

const toHTML = (key) => {
  const record = storage(key);
  const id = key.split(':')[1];
  return `
    <li class="dashboard__record">
      <div class="dashboard__record_title">
        <div class="dashboard__record_title_logo">${SpreadsheetLogo}</div>
        <a class="dashboard__record_title_value" href="#${excel}/${id}">
          ${record.spreadsheetTitle}
        </a>
      </div>
      <span class="dashboard__record_owner">Me</span>
      <span class="dashboard__record_time">
        ${record.lastOpenDate}
      </span>
      <div class="dashboard__record_buttons">
        <button role="button">${More}</button>
      </div>
    </li>
  `;
};

const getAllKeys = () =>
  Object.keys(localStorage).filter((key) => key.includes('excel'));

const createRecordsTable = () => {
  const keys = getAllKeys();

  if (!keys.length) {
    return `Empty`;
  }

  return keys.map(toHTML).join('');
};

export default createRecordsTable;
