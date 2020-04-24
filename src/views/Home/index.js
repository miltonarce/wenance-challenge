import React, { useEffect, useState } from "react";
import { Main } from "./styled";
import SearchForm from "./../../components/SearchForm";
import CardList from "../../components/CardList";
import { useSelector, useDispatch } from "react-redux";
import { getPeople } from "../../store/creators";

const Home = () => {
  const dispatch = useDispatch();
  const { people } = useSelector((state) => state);
  const [query, setQuery] = useState("");
  const filteredPeople = people.data.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    dispatch(getPeople());
  }, []);

  const filterData = (val) => {
    setQuery(val);
  };

  return (
    <Main>
      <h1>People Finder</h1>
      <SearchForm action={filterData} />
      <CardList
        items={filteredPeople}
        loading={people.loading}
        message={people.message}
      />
    </Main>
  );
};

export default Home;
