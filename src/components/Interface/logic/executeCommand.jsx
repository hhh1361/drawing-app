import $ from 'jquery';
import canvasCreate from './instruments/canvasCreate';
import line from './instruments/line';
import rectangle from './instruments/rectangle';

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
      return !!(
        command[1] <= array[0].length &&
        command[2] <= array.length &&
        command[1] >= 0 &&
        command[2] >= 0 &&
        /\w+/.exec(command[3]) &&
        command.length === 4
      );
    default:
      $('#basic').modal('show');
      return false;
  }
}
