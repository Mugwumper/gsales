import axios from "axios";

export default {
  // Gets all family members
  getFamily: function(userEmail) {
    return axios.post("/api/family/getfamily", userEmail);
  },
  // Gets all vendors
  getVendor: function(userEmail) {
    return axios.post("/api/vendors/getvendors", userEmail);
  },
  // Gets the familymember with the given id
  getFamilyMember: function(id) {
    return axios.get("/api/family/" + id);
  },
  deleteVendor: function(vendorData) {
    return axios.post("/api/vendors/delete", vendorData);
  },
  saveFamily: function(familyData) {
    return axios.post("/api/family", familyData);
  },
  saveVendor: function(vendorData) {
    return axios.post("/api/vendors", vendorData);
  },
  login: function(userData) {
    console.log("API sees login...");
    console.log(userData); 
    return axios.post("/api/user/login", userData);
  },
  setUser: function(userData) {
    console.log("API sees setUser...");
    console.log(userData); 
    return axios.post("/api/family/setuser", userData);
  },
  newUser: function(userEmail) {
    return axios.post("/api/user/new", userEmail);
  },
  toggleIsSaved: function(event) {
    //console.log("API sees toggleIsSaved");
    //console.log(event);
    return axios.put("/api/events/toggle", event);
  },
  getEvents: function (userEmail) {
    return axios.post("/api/events/saved", userEmail);
  },
  getAnswerKey: function() {
    return axios.get("/api/events/answerkey");
  },
  getUserPlus: function(userEmail) {
    return axios.post("/api/user/getuserplus", userEmail);
  }
  






};
