import $ from 'jquery';

export default function canvasCreate(y, x) {
  const array = [];
  if (y <= 25 && x <= 25 && y >= 0 && x >= 0) {
    for (let i = 0; i < y; i++) {
      array[i] = [];
      for (let j = 0; j < x; j++) {
        array[i][j] = {};
      }
    }
    return array;
  }
  $('#size').modal('show');
  return false;
}
