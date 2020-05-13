import React from "react";
import { connect } from "react-redux";

const CovidPage = () => {
  return (
    <div>
      <h1>Covid News</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    Global: {
      totalConfirmed: state.totalConfirmed,
      totalDeaths: state.totalDeaths,
    },

    Countries: [
      {
        Country: state.Country,
        TotalConfirmed: state.TotalConfirmed,
        TotalDeaths: state.TotalDeaths,
      },
    ],
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, {})(CovidPage);
