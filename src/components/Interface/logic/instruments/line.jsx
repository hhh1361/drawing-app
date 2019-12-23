import $ from 'jquery';

export default function line(array, x1, y1, x2, y2) {
  const result = array;
  if (
    x1 <= array[0].length &&
    y1 <= array.length &&
    x2 <= array[0].length &&
    y2 <= array.length &&
    x1 >= 0 &&
    y1 >= 0 &&
    x2 >= 0 &&
    y2 >= 0
  ) {
    if (y1 === y2) {
      const first = +x1 > +x2 ? x2 : x1;
      const second = +x1 > +x2 ? x1 : x2;
      for (let i = 0; i <= +second - first; i++) {
        result[+y1 - 1][+first + i - 1] = { color: 'X' };
      }
      return result;
    }
    if (x1 === x2) {
      const first = +y1 > +y2 ? y2 : y1;
      const second = +y1 > +y2 ? y1 : y2;
      for (let i = 0; i <= +second - first; i++) {
        result[+first + i - 1][+x1 - 1] = { color: 'X' };
      }
      return result;
    }

    $('#straight').modal('show');
    return false;
  }

  $('#basic').modal('show');
  return false;
}
