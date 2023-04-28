function toCell(content) {
  return `<div contenteditable class="cell">${content}</div>`;
}

function toCol(col) {
  return `<div class="excel__column">${col}</div>`;
}

function createRow(content, index) {
  return `
      <div class="excel__row">
        <div class="excel__row-info">${index || ''}</div>
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
  const columnsArray = new Array(columnsCount).fill('');

  const rows = [];
  const columns = columnsArray.map(toChar).map(toCol).join('');
  const cells = columnsArray.map(toCell).join('');

  rows.push(createRow(columns));

  for (let i = 0; i < rowsCount; i += 1) {
    rows.push(createRow(cells, i + 1));
    console.log(i);
  }

  return rows.join('');
}
