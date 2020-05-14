import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { fetchData } from "../actions/pageActions";

const CovidPage = (props) => {
  console.log("CovidPage - PROPS:", props);
  useEffect(() => {
    //call an action creator
    props.fetchData();
  }, []);

  // if (props.isFetching) {
  //   return <Loader />;
  // }

  return (
    <div>
      <h1>Covid News</h1>
      {props.isFetching && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}
      {props.Countries &&
        props.Countries.map((item) => {
          console.log("ITEM", item);
          return (
            <div key={item.Country}>
              <h3>Country:{item.Country}</h3>
              <p>Total Confirmed:{item.TotalConfirmed}</p>
              <p>Totel Deaths:{item.TotalDeaths}</p>
            </div>
          );
        })}
      {/* 
      <button className="button" onClick={props.fetchData}>
        Fetch Data!
      </button> */}
    </div>
  );
};

//{props.Countries && <h3>{props.Countries.Country} = {props.Countries ? <h3>"{props.Countries.Country}"</h3> : null}

const mapStateToProps = (state) => {
  console.log("CovidPage- state:", state);
  return {
    Countries: state.pageReducer.Countries,
    // Countries: [
    //   {
    //     Country: state.pageReducer.Countries.Country,
    //     TotalConfirmed: state.pageReducer.Countries.TotalConfirmed,
    //     TotalDeaths: state.pageReducer.Countries.TotalDeaths,
    //   },
    // ],
    isFetching: state.pageReducer.isFetching,
    error: state.pageReducer.error,
  };
};

export default connect(mapStateToProps, { fetchData })(CovidPage);
