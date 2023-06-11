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

export const isObject = (item) =>
  item && typeof item === 'object' && !Array.isArray(item);

export const isEqual = (a, b) => {
  if (isObject(a) && isObject(b)) {
    const objKeys1 = Object.keys(a);
    const objKeys2 = Object.keys(b);

    if (objKeys1.length !== objKeys2.length) return false;

    objKeys1.forEach((key) => {
      const value1 = a[key];
      const value2 = b[key];
      const isObjects = isObject(value1) && isObject(value2);

      return !(
        (isObjects && !isEqual(value1, value2)) ||
        (!isObjects && value1 !== value2)
      );
    });

    return true;
  }

  return a === b;
};

// [
//   [
//     {},
//     {},
//   ]
// ]

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
