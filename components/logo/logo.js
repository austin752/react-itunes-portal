import React from 'react';

const Logo = props => {
  return (
    <div className={props.className}>
      <h1>{props.siteTitle}</h1>
    </div>
  )
}

export default Logo