import React from 'react';

const SearchButton = props => {
  return (
    <button
      type={props.type}
      className="btn btn-primary search-button"
      onClick={props.action}>
      {props.title}
    </button>
  );

}

export default SearchButton