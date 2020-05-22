import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { fetchData } from "../actions/pageActions";

const CovidPage = (props) => {
  const [search, setSearch] = useState("");

  // console.log("CovidPage - PROPS:", props);
  useEffect(() => {
    //call an action creator
    props.fetchData();
  }, []);

  // if (props.isFetching) {
  //   return <Loader />;
  // }

  const filteredCountries = props.Countries.filter((intem) => {
    return intem.Country.toLowerCase().includes(search.toLocaleLowerCase());
  });

  return (
    <div>
      <h1>(COVID-19)</h1>
      <h3> Updates around the world</h3>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />

      {props.isFetching && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}

      {filteredCountries &&
        filteredCountries.map((item) => {
          console.log("ITEM", item);
          return (
            <div key={item.Country}>
              <h2>{item.Country}</h2>
              <p>Total Confirmed:{item.TotalConfirmed}</p>
              <p>Total Deaths:{item.TotalDeaths}</p>
            </div>
          );
        })}
    </div>
  );
};

//{props.Countries && <h3>{props.Countries.Country} = {props.Countries ? <h3>"{props.Countries.Country}"</h3> : null}

const mapStateToProps = (state) => {
  console.log("CovidPage- state:", state);
  return {
    Countries: state.pageReducer.Countries,

    isFetching: state.pageReducer.isFetching,
    error: state.pageReducer.error,
  };
};

export default connect(mapStateToProps, { fetchData })(CovidPage);
// Countries: [
//   {
//     Country: state.pageReducer.Countries.Country,
//     TotalConfirmed: state.pageReducer.Countries.TotalConfirmed,
//     TotalDeaths: state.pageReducer.Countries.TotalDeaths,
//   },
// ],
