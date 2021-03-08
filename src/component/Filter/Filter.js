import React from "react";
import PropTypes from "prop-types";

const Filter = ({ filter, onChange }) => (
  <div>
    <p>Find contacts by name</p>
    <label>
      <input type="text" value={filter} onChange={onChange} />
    </label>
  </div>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
