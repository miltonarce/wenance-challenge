import React, { useState } from "react";
import PropTypes from "prop-types";
import { Section } from "./styled";

const SearchForm = ({ action }) => {
  const [value, setValue] = useState("");

  const handleForm = (e) => {
    setValue(e.target.value);
  };

  return (
    <Section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          action(value);
        }}
        className="form-search"
      >
        <div>
          <label htmlFor="search">Search:</label>
          <input id="search" type="text" name="search" onChange={handleForm} />
        </div>
        <div>
          <button type="submit">Search</button>
        </div>
      </form>
    </Section>
  );
};

SearchForm.propTypes = {
  action: PropTypes.func.isRequired,
};

export default SearchForm;
