import React from 'react';

export default function Cell(props) {
  const { text } = props;
  return (
    <div className="cell">
      {text ? <span>{text}</span> : <span />}
      {/* <span>{text || null}</span> */}
    </div>
  );
}
