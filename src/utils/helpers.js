export default function capitalizeFirstLetter(string) {
  if (typeof string !== 'string') {
    return '';
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const cellRange = (start, end) => {
  if (start > end) {
    [start, end] = [end, start];
  }
  return new Array(end - start + 1).fill('').map((_, index) => start + index);
};
