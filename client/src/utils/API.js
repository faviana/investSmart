import axios from "axios";

export default {
  //******* Gets all investors by user*=
  getInvestors: function(userNameId) {
    return axios.get(`/api/investors/all/${userNameId}`);
  },
  // Gets the investor with the given id
  getInvestor: function(id) {
    return axios.get(`/api/investors/${id}`);
  },
  // Deletes the investor with the given id
  deleteInvestor: function(id) {
    console.log("api delete investor:", id);
    return axios.delete(`/api/investors/${id}`);
  },
  // Saves an investor to the database
  saveInvestor: function(investorData) {
    return axios.post("/api/investors", investorData);
  },

  saveProperties: function(propertiesData) {
    return axios.post("/api/properties", propertiesData);
  },
};
