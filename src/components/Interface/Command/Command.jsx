import React from 'react';

export default function Command(props) {
  const { text, date } = props;
  const options = {
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  const time = date.toLocaleString('ru', options);

  return (
    <li className="command">
      <span className="date">{time}</span>
      <span>{text}</span>
    </li>
  );
}
