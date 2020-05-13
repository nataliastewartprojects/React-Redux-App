const initialState = {
  Global: {
    totalConfirmed: "",
    totalDeaths: "",
  },

  Countries: [
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
    default:
      return state;
  }
};
