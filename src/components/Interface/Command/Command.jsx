import React from 'react'

export default function Command(props) {
  const { text } = props
  return (
    <div className="command">
      <span>{text}</span>
    </div>
  )
}
