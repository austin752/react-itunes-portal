import React from 'react';

const SearchInput = props => {
  return (
    <div className="search-input">
      <label>and/or enter artist name</label>
      <input
        className="form-control search-input"
        type="btn"
        placeholder={props.placeholder}
        value={props.value}
        name={process.artistName}
        onChange={props.handleChange} />
    </div>
  )
};

export default SearchInput
