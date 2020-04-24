import React, { useState } from "react";
import { Section } from "./styled";

const SearchForm = ({ action }) => {
  const [value, setValue] = useState("");

  const handleForm = e => {
    setValue(e.target.value);
 }
 
  return (
    <Section>
      <form onSubmit={(e) => { e.preventDefault(); action(value) }}>
        <div>
          <input type="text" name="search" onChange={handleForm}/>
        </div>
        <div>
          <button type="submit">
            Search
        </button>
        </div>
      </form>
    </Section>
  )
};


export default SearchForm;