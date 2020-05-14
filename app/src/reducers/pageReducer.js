const initialState = {
  Countries: [
    {
      Country: "",
      TotalConfirmed: "",
      TotalDeaths: "",
    },
    {
      Country: "",
      TotalConfirmed: "",
      TotalDeaths: "",
    },
  ],
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
    default:
      return state;
  }
};
