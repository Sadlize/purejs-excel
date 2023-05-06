function toCell(row) {
  return (col) =>
    `<div
      contenteditable
      class="cell"
      data-cell="${col}${row}"
    ></div>`;
}

function toColumn(col) {
  return `
    <div class="excel__column" data-type="resizable" data-col="${col}">
      <span>${col}</span>
      <div class="col-resize" data-resize="col">
        <div class="col-resize-handle-bar"></div>
      </div>
    </div>
  `;
}

function createRow(content, index) {
  return `
    <div class="excel__row" data-type="resizable">
      <div class="excel__row-info">
        ${
          index
            ? `
              <span>${index}</span>
              <div class="row-resize" data-resize="row">
                <div class="row-resize-handle-bar"></div>
              </div>
              `
            : ''
        }
      </div>
      <div class="excel__row-data">
        ${content}
      </div>
    </div>
  `;
}

const CODES = {
  A: 65,
  Z: 90,
};

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}

export default function TableTemplate(rowsCount = 15) {
  const columnsCount = CODES.Z - CODES.A + 1;
  const columnsArray = new Array(columnsCount).fill('').map(toChar);

  const rows = [];
  const columns = columnsArray.map(toColumn).join('');

  rows.push(createRow(columns));

  for (let i = 0; i < rowsCount; i += 1) {
    const cells = columnsArray.map(toCell(i + 1)).join('');
    rows.push(createRow(cells, i + 1));
  }

  return rows.join('');
}
