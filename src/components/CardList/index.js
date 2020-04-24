import React from "react";
import PropTypes from "prop-types";
import Card from "./../Card";
import { Section, Ul } from "./styled";
import Spinner from "./../Spinner";
import NotFoundMessage from "./../Messages/NotFound";

const CardList = ({ items, loading, message }) =>
  loading ? (
    <Section>
      <Spinner />
    </Section>
  ) : items.length > 0 ? (
    <Section>
      <Ul>
        {items.map((e) => (
          <Card key={e.idPeople} person={e} />
        ))}
      </Ul>
    </Section>
  ) : (
    <NotFoundMessage
      message={
        message || "UPS! No results found young padawan, please try again."
      }
    />
  );

CardList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default CardList;
