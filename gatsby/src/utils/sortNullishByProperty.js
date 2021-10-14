const sortNullishByProperty = function (property) {
  return function (a, b) {
    if (a[property] === null) {
      return 1;
    }
    if (b[property] === null) {
      return -1;
    }
    if (a[property] === b[property]) {
      return 0;
    }
    return a[property] < b[property] ? -1 : 1;
  };
};

export default sortNullishByProperty;
