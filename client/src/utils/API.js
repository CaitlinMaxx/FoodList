import axios from "axios";


export default {
  getFoods: function(query) {
    return axios.get("/api/foods", { params: { q: query } });
  },
  getMeal: function(query) {
    return axios.get("/api/meal", { params: { q: query } });
  }
};
