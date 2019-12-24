import $ from 'jquery';
import line from './line';

export default function rectangle(array, x1, y1, x2, y2) {
  let result;
  if (array.length !== 0) {
    if (
      x1 <= array[0].length &&
      y1 <= array.length &&
      x2 <= array[0].length &&
      y2 <= array.length &&
      x1 > 0 &&
      y1 > 0 &&
      x2 > 0 &&
      y2 > 0
    ) {
      result = line(array, x1, y1, x1, y2);
      result = line(result, x1, y1, x2, y1);
      result = line(result, x2, y2, x2, y1);
      result = line(result, x2, y2, x1, y2);
      return result;
    }
    $('#range').modal('show');
    return false;
  }
  $('#welcome').modal('show');
  return false;
}
