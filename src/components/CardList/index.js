import React from "react";
import Card from "./../Card";

const CardList = ({ items, actions }) => {
  return (
    <ul>
      {
        items.map(e => <Card key={e.idPeople} person={e}/>) 
      }
    </ul>
  )};


export default CardList;