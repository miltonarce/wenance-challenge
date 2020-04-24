import React, { useEffect, useState } from "react";
import { Main } from "./styled";
import SearchForm from "./../../components/SearchForm";
import CardList from "../../components/CardList";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { getPeople } from "../../store/creators";

const Home = () => {
  const dispatch = useDispatch();
  const { people } = useSelector(state => state);
  const [state, setState] = useState({
    people: [],
    peopleFilter: [],
  });

  useEffect(() => { 
    if (people.data.length <= 0) { 
    dispatch(getPeople());
    } else {
      setState({ ...state, people: people.data, peopleFilter: people.data});
    }
  },[people.data]);

  const filterData = val => {
    setState({ ...state, peopleFilter: state.people.filter(p => p.name.toLowerCase().includes(val.toLowerCase())) });
  }

  console.log("state value", state);
  return(
    <Main>
      <h1>People Finder</h1>
      <SearchForm action={filterData}/>
      <CardList items={state.peopleFilter}/>
    </Main>
  )
};

export default Home;
