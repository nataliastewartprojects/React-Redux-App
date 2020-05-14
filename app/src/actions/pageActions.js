//thunks
import axios from "axios";
export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_DATA_START" });
    axios
      .get("https://api.covid19api.com/summary")
      .then((res) => console.log("res from axios:", res))
      .catch((err) => console.log("Axios ERROR:", err));
  };
};
