import React from "react";
import { useDispatch } from "react-redux";
import { Li } from "./styled";
import { deletePeople } from "../../store/creators";

const Card = ({ person, action }) => {
  const dispatch = useDispatch();
  
  const handleDelete = people => {
    dispatch(deletePeople(people));
  }
  
  return (
  <Li>
    <div>
    {person.name}{person.idPeople}
    </div>
    <div>
      <button type="button" onClick={() => handleDelete(person.idPeople)}>Delete</button>
    </div>
  </Li>)};

export default Card;