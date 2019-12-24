import $ from 'jquery';

export default function bucket(array, x1, y1, color) {
  const result = array;

  if (array.length !== 0) {
    const bucketNearbyCells = (x, y, previousColor, nextColor) => {
      if (y >= 0 && y < result.length && x >= 0 && x < result[0].length) {
        if (result[y][x].color === previousColor) {
          result[y][x].color = nextColor;
          bucketNearbyCells(x + 1, y, previousColor, nextColor);
          bucketNearbyCells(x - 1, y, previousColor, nextColor);
          bucketNearbyCells(x, y + 1, previousColor, nextColor);
          bucketNearbyCells(x, y - 1, previousColor, nextColor);
        }
      }
    };
    if (x1 <= array[0].length && y1 <= array.length && x1 >= 0 && y1 >= 0) {
      if (/\w+/.exec(color)) {
        bucketNearbyCells(x1, y1, array[y1][x1].color, color);
        return result;
      }
      $('#basic').modal('show');
      return false;
    }
    $('#range').modal('show');
    return false;
  }
  $('#welcome').modal('show');
  return false;
}
