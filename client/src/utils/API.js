import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getFoods: function(query) {
    return axios.get("/api/foods", { params: { q: query } });
  }
};
