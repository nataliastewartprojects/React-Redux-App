const initialState = {
  Countries: [{ Country: "", TotalConfirmed: "", TotalDeaths: "" }],
  isFetching: false,
  error: "",
};

export const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_START":
      return {
        ...state,
        isFetching: true,
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        Countries: action.payload,
        // Countries: [
        //   ...state.Countries,
        //   {
        //     Country: action.payload.Country,
        //     TotalConfirmed: action.payload.TotalConfirmed,
        //     TotalDeaths: action.payload.TotalDeaths,
        //   },
        // ],
        isFetching: false,
        error: "",
      };
    default:
      return state;
  }
};
