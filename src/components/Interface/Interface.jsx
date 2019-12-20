import React from 'react'
import { connect } from 'react-redux'
import Command from './Command/Command'

function Interface(props) {
  const { commands, onSubmit } = props
  let command
  const onChangeHandler = e => {
    command = e.target.value
  }
  const onEnterHandler = e => {
    if (e.key === 'Enter') {
      const date = Date.now()
      onSubmit(command, date)
      e.target.value = ''
    }
  }

  return (
    <div className="action-panel">
      <div className="current-commands">
        <input
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
    </div>
  )
}

export default connect(
  state => {
    return {
      commands: state.commands,
    }
  },
  dispatch => ({
    onSubmit: (description, date) => {
      dispatch({
        type: 'ADD_COMMAND',
        payload: { description, date },
      })
    },
  }),
)(Interface)
