import React from 'react';

const SvgBlockquote = props => (
  <blockquote classname="card-blockquote">
    <svg preserveAspectRatio="none" viewBox="0 0 583 95" {...props}>
      <path d="M0 52l583 43H0z" />
      <path opacity={0.2} d="M0 42l583 53L683 0 0 95z" />
    </svg>
    <h4 classname="display-3 font-weight-bold text-white">
      { props.title }
    </h4>
  </blockquote>
)

export default SvgBlockquote;
