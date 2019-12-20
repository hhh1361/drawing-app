import React from 'react'
import { connect } from 'react-redux'

export default function Command(props) {
  const { text } = props
  return (
    <div className="command">
      <span>{text}</span>
    </div>
  )
}
