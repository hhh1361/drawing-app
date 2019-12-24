import React from 'react';
import { connect } from 'react-redux';
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
      const date = new Date();
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
      <ul className="previous-commands">
        {[]
          .concat(commands)
          .reverse()
          .map(e => (
            <Command text={e.description} date={e.date} key={e.date} />
          ))}
      </ul>
      <Error
        id="welcome"
        header="Welcome"
        description2="To begin drawing you should create canvas"
        description3="You can do it using command 'C' with 'X' cells width and 'Y' cells height"
        description4="For example command 'C 20 4' will create canvas with 20 cells width and 4 cells height"
        close="Close hint"
      />
      <Error
        id="basic"
        header="Command should contain letters [a-z, A-Z] and numbers [1-25]"
        bold2="C 20 4. "
        description2="Create canvas with 20 cells width, 4 cells height."
        bold3="L 1 2 6 2. "
        description3="Create straight line from cell X(1,2) to cell Y(6,2)."
        bold4="R 16 1 20 3. "
        description4="Create rectangle between cells X(16,1) and Y(20,3)."
        bold5="B 10 3 o. "
        description5="Use bucket fill in cell X(10,3) with color 'o'."
      />
      <Error
        id="size"
        header="Canvas size"
        description1="Canvas size should be no more than 25 cells."
      />
      <Error
        id="range"
        header="Incorrect coordinates"
        description1="The cells you want to draw are out of canvas."
      />
      <Error
        id="straight"
        header="Straight line"
        description1="Line must be straight."
      />
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
