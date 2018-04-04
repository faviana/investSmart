import axios from "axios";

export default {
  // Gets all investors
  getInvestors: function() {
    return axios.get("/api/investors");
  },
  // Gets the investor with the given id
  getInvestor: function(id) {
    return axios.get("/api/investors/" + id);
  },
  // Deletes the investor with the given id
  deleteInvestor: function(id) {
    return axios.delete("/api/investors/" + id);
  },
  // Saves an investor to the database
  saveInvestor: function(investorData) {
    return axios.post("/api/investors", investorData);
  },
  postInvestor: function(formData) {
    return axios.post("/api/investors", formData);
  }
};
