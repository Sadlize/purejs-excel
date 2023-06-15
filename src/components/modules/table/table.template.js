import { toInlineStyles, concatStr } from 'utils/helpers';
import { defaultStyles } from 'src/constants';
import parse from 'core/Parse';

export const CODES = {
  A: 65,
  Z: 90,
};

const DEFAULT_WIDTH = 100;
const DEFAULT_HEIGHT = 24;

const toChar = (_, index) => String.fromCharCode(CODES.A + index);
const getHeight = (state, index) => state[index] || DEFAULT_HEIGHT;
const getWidth = (state, index) => state[index] || DEFAULT_WIDTH;
const withWidthFrom = (state) => (col, index) => ({
  col,
  colId: index,
  width: getWidth(state.colState, index),
});

const toCell = (state, row) => (_, col) => {
  const id = `${row}:${col}`;
  const value = state.dataState[id] || '';
  const width = getWidth(state.colState, col);
  const styles = concatStr(';', [
    toInlineStyles({
      ...defaultStyles,
      ...state.stylesState[id],
    }),
    `width: ${width}px`,
  ]);
  const attr = concatStr(' ', [
    value && `data-formula="${value}"`,
    `style="${styles}"`,
  ]);
  return `
    <div
      contenteditable
      class="cell"
      data-cell="${id}"
      ${attr}
    >
      ${parse(value)}
    </div>
  `;
};

const toColumn = ({ col, colId, width }) => `
  <div
    class="excel__column"
    data-type="resizable"
    data-col="${colId}"
    style="width: ${width}px"
  >
    <span>${col}</span>
    <div class="col-resize" data-resize="col">
      <div class="col-resize-handle-bar"></div>
    </div>
  </div>
`;

const createRow = (row, rowId = 0, state = {}) => `
  <div
    class="excel__row"
    data-type="resizable"
    data-row="${rowId}"
    style="height: ${getHeight(state, rowId)}px"
  >
    <div class="excel__row-info">
      ${
        rowId
          ? `
            <span>${rowId}</span>
            <div class="row-resize" data-resize="row">
              <div class="row-resize-handle-bar"></div>
            </div>
            `
          : ''
      }
    </div>
    <div class="excel__row-data">
      ${row}
    </div>
  </div>
`;

export default function TableTemplate(rowsCount = 15, state = {}) {
  const columnsCount = CODES.Z - CODES.A + 1;
  const columnsArray = new Array(columnsCount).fill('').map(toChar);

  const rows = [];
  const columns = columnsArray.map(withWidthFrom(state)).map(toColumn).join('');

  rows.push(createRow(columns));

  for (let row = 0; row < rowsCount; row += 1) {
    const cells = columnsArray.map(toCell(state, row)).join('');
    rows.push(createRow(cells, row + 1, state.rowState));
  }

  return rows.join('');
}
