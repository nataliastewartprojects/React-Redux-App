const initialState = {
  Countries: [
    {
      Country: "Afghanistan",
      TotalConfirmed: 100,
      TotalDeaths: 80,
    },
    {
      Country: "Brazil",
      TotalConfirmed: 122,
      TotalDeaths: 30,
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
