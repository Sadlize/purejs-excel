export const capitalizeFirstLetter = (string) => {
  if (typeof string !== 'string') {
    return '';
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const cellRange = (start, end) => {
  if (start > end) {
    [start, end] = [end, start];
  }
  return new Array(end - start + 1).fill('').map((_, index) => start + index);
};

export const storage = (key, data = null) => {
  if (!data) {
    return JSON.parse(localStorage.getItem(key));
  }
  return localStorage.setItem(key, JSON.stringify(data));
};

export const isObject = (item) => item && typeof item === 'object';

export const isEqual = (x, y) => {
  const ok = Object.keys;
  return isObject(x) && isObject(y)
    ? ok(x).length === ok(y).length &&
        ok(x).every((key) => isEqual(x[key], y[key]))
    : x === y;
};

export const objectFind = (arr, key, value) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i][key] === value) {
      return arr[i];
    }
    if (typeof arr[i] === 'object' && arr[i] !== null) {
      const result = objectFind(arr[i], key, value);
      if (result) {
        return result;
      }
    }
  }
  return null;
};

const elementHaveValue = (el) => el !== undefined && el !== null && el !== '';

export const concatStr = (separator, stringsArr) => {
  if (Array.isArray(stringsArr)) {
    return stringsArr.filter((el) => elementHaveValue(el)).join(separator);
  }
  return console.error('An array of strings has not been provided');
};

export const camelToDashCase = (str) =>
  str.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);

export const toInlineStyles = (styles = {}) =>
  Object.keys(styles)
    .map((key) => `${camelToDashCase(key)}: ${styles[key]}`)
    .join(';');

export const debounce = (fn, wait) => {
  let timeout;
  return (...args) => {
    const later = () => {
      clearTimeout(timeout);
      fn(...args);
    };
    clearTimeout(timeout);
    timeout = setInterval(later, wait);
  };
};
