import React from "react";
import { Section } from "./styled";

const SearchForm = () => (
  <Section>
    <form>
      <div>
        <input type="text" />
      </div>
      <div>
        <button>
          Search
        </button>
      </div>
   </form>
    </Section>
  );


export default SearchForm;