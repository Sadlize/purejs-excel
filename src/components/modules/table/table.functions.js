import { cellRange } from 'utils/helpers';

export function shouldResize(event) {
  return event.target.dataset.resize;
}

export function isCell(event) {
  return event.target.dataset.cell;
}

export function matrix($target, $current) {
  const target = $target.cellId(true);
  const current = $current.cellId(true);

  const rows = cellRange(current.row, target.row);
  const cols = cellRange(current.col, target.col);

  const groupIds = [];
  rows.forEach((row) => {
    cols.forEach((col) => groupIds.push(`${row}:${col}`));
  });
  return groupIds;
}

export function nextSelector(code, { col, row }) {
  const MIN_VALUE = 0;

  switch (code) {
    case 'Enter':
    case 'ArrowDown':
      row += 1;
      break;
    case 'Tab':
    case 'ArrowRight':
      col += 1;
      break;
    case 'ArrowLeft':
      col = col - 1 < MIN_VALUE ? MIN_VALUE : col - 1;
      break;
    case 'ArrowUp':
      row = row - 1 < MIN_VALUE ? MIN_VALUE : row - 1;
      break;
    default:
      return new Error('Key is not from available keys list');
  }
  return `[data-cell="${row}:${col}"]`;
}
