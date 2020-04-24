import React from "react";
import PropTypes from "prop-types";
import Card from "./../Card";

const CardList = ({ items }) => {
  return (
    <ul>
      {
        items.map(e => <Card key={e.idPeople} person={e}/>) 
      }
    </ul>
  )};

CardList.propTypes = {
 items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default CardList;