import React from 'react'

export default function Cell(props) {
  const { text } = props
  return (
    <div className="cell">
      <span>{text[0] ? text[0].toUpperCase() : null}</span>
    </div>
  )
}
