import { CODES } from 'components/modules/table/table.template';

export default function capitalizeFirstLetter(string) {
  if (typeof string !== 'string') {
    return '';
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const cellRange = (start, end) => {
  const isColl = typeof start === 'string' && typeof end === 'string';
  if (isColl) {
    end = end.charCodeAt(0) - CODES.A;
    start = start.charCodeAt(0) - CODES.A;
  }
  const minElement = Math.min(start, end);
  return new Array(Math.abs(end - start) + 1).fill('').map((_, index) => {
    if (isColl) {
      return String.fromCharCode(minElement + CODES.A + index);
    }
    return minElement + index;
  });
};
