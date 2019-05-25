import React from 'react';

const ItemsPerPage = (props) => {
  if (props.numSongs > 0) {
    return (
      <div className={props.className}>
        <label>Number of items per page</label>
        <select className="form-control items-per-page" name={props.name} onChange={props.handleChange}>
          <option value="8">8</option>
          <option value="16">16</option>
          <option value="24">24</option>
          <option value="32">32</option>
          <option value={props.allItems}>{props.allItems}</option>
        </select>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }


}
export default ItemsPerPage