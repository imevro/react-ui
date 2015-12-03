import React from 'react';

export default () => (props) => (
  <svg {...props}>
    <use xlinkHref={require(`../../assets/${props.icon}`)} />
  </svg>
);
