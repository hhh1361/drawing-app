import React from 'react'
import { connect } from 'react-redux'
import Cell from './Cell/Cell'

function Canvas(props) {
  const { canvas } = props

  return (
    <div className="canvas">
      <div
        className="vertical-wrapper"
        style={{
          width: `${20 * canvas.length}px`,
        }}
      >
        {canvas.map(i => (
          <div className="row" key={`r${canvas.indexOf(i)}`}>
            <div
              className="horizontal-wrapper"
              key={`r${i}`}
              style={{
                width: `${20 * i.length}px`,
              }}
            >
              {i.map(j => (
                <Cell text={j} key={`r${canvas.indexOf(i)}c${i.indexOf(j)}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default connect(
  state => {
    return {
      canvas: state.canvas,
    }
  },
  dispatch => ({
    onNextStep: () => {
      dispatch({ type: 'CHANGE_STAGE', payload: 'completed' })
    },
  }),
)(Canvas)
