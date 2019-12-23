import React from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import Command from './command/Command';
import Error from './error/Error';
import executeCommand from './logic/executeCommand';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Interface(props) {
  const { commands, canvas, onSubmit } = props;

  let command;
  const onChangeHandler = e => {
    command = e.target.value;
  };
  const onEnterHandler = e => {
    if (e.key === 'Enter') {
      const date = Date.now();
      const result = executeCommand(command, canvas);
      if (result) {
        onSubmit(command, date, result);
      }
      e.target.value = '';
    }
  };

  return (
    <div className="action-panel">
      <div className="current-commands">
        <input
          className="form-control"
          type="text"
          onKeyPress={onEnterHandler}
          onChange={onChangeHandler}
        />
      </div>
      <div className="previous-commands">
        {[]
          .concat(commands)
          .reverse()
          .map(e => (
            <Command text={e.description} key={e.date} />
          ))}
      </div>
      <Error id="basic" header="Incorrect command" />
      <Error id="size" header="size" />
      <Error id="straight" header="straight line" />
    </div>
  );
}

export default connect(
  state => {
    return {
      commands: state.commands,
      canvas: state.canvas,
    };
  },
  dispatch => ({
    onSubmit: (description, date, canvas) => {
      dispatch({
        type: 'ADD_COMMAND',
        payload: { description, date },
      });
      dispatch({
        type: 'UPDATE_CANVAS',
        payload: canvas,
      });
    },
  }),
)(Interface);
