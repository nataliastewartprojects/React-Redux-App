import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { fetchData } from "../actions/pageActions";

const CovidPage = (props) => {
  // console.log("CovidPage - PROPS:", props);
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
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      )}
      {props.Countries &&
        props.Countries.map((item) => {
          return (
            <div key={item.Country}>
              <h3>{item.Country}</h3>
              <p>{item.TotalConfirmed}</p>
              <p>{item.TotalDeaths}</p>
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
