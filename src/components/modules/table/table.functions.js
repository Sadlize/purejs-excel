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

  const cols = cellRange(current.col, target.col);
  const rows = cellRange(current.row, target.row);

  const groupIds = [];
  cols.forEach((col) => {
    rows.forEach((row) => groupIds.push(`${col + row}`));
  });

  return groupIds;
}
