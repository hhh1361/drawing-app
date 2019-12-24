import $ from 'jquery';
import canvasCreate from './instruments/canvasCreate';
import line from './instruments/line';
import rectangle from './instruments/rectangle';
import bucket from './instruments/bucket';

export default function commandCheck(string, array) {
  const command = string.split(' ');

  switch (command[0]) {
    case 'C':
      if (command.length === 3) {
        return canvasCreate(command[2], command[1]);
      }
      $('#basic').modal('show');
      return false;

    case 'L':
      if (command.length === 5) {
        return line(array, command[1], command[2], command[3], command[4]);
      }
      $('#basic').modal('show');
      return false;

    case 'R':
      if (command.length === 5) {
        return rectangle(array, command[1], command[2], command[3], command[4]);
      }
      $('#basic').modal('show');
      return false;

    case 'B':
      if (command.length === 4) {
        return bucket(array, command[1] - 1, command[2] - 1, command[3]);
      }
      $('#basic').modal('show');
      return false;
    default:
      if (array.length === 0) {
        $('#welcome').modal('show');
        return false;
      }
      $('#basic').modal('show');
      return false;
  }
}
