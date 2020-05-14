//thunks
import axios from "axios";
export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_DATA_START" });
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.covid19api.com/summary"
      )
      .then((res) =>
        // console.log("res from axios:", res)
        //res.data.Countries
        dispatch({ type: "FETCH_DATA_SUCCESS", payload: res.data.Countries })
      )
      .catch((err) => console.log("Axios ERROR:", err));
  };
};
