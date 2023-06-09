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
//
// const isDeepEqual = (object1, object2) => {
//   const objKeys1 = Object.keys(object1);
//   const objKeys2 = Object.keys(object2);
//
//   if (objKeys1.length !== objKeys2.length) return false;
//
//   for (const key of objKeys1) {
//     const value1 = object1[key];
//     const value2 = object2[key];
//
//     const isObjects = isObject(value1) && isObject(value2);
//
//     if (
//       (isObjects && !isDeepEqual(value1, value2)) ||
//       (!isObjects && value1 !== value2)
//     ) {
//       return false;
//     }
//   }
//   return true;
// };
