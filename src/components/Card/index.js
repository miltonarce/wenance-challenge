import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Li } from "./styled";
import { deletePeople } from "../../store/creators";

const Card = ({ person }) => {
  const dispatch = useDispatch();

  const handleDelete = (people) => {
    dispatch(deletePeople(people));
  };

  return (
    <Li>
      <div>
        <h2>{person.name}</h2>
        <label>
          <strong>Height:</strong> {person.height} m
        </label>
        <label>
          <strong>Gender:</strong> {person.gender}
        </label>
      </div>
      <div>
        <button type="button" onClick={() => handleDelete(person.idPeople)}>
          Delete
        </button>
      </div>
    </Li>
  );
};

Card.propTypes = {
  person: PropTypes.object,
};

export default Card;
