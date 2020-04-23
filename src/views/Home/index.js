import React, { useEffect } from "react";
import { Main } from "./styled";
import SearchForm from "./../../components/SearchForm";
import CardList from "../../components/CardList";
import { useSelector, useDispatch } from "react-redux";
import { getPeople } from "../../store/creators";

const Home = () => {
  const dispatch = useDispatch();
  const { people } = useSelector(state => state);

  useEffect(() => {
    dispatch(getPeople());
  }, []);

  return(
    <Main>
      <h1>People Finder</h1>
      <SearchForm />
      <CardList items={people.data}/>
    </Main>
  )
};

export default Home;
