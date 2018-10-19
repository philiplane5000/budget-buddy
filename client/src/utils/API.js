import axios from "axios";

export default {
  // Gets all saved budgets: (prev)
  getCurrentBudget: () => {
      return axios.get("/api/budgets");
  },

  // Gets all saved budgets: (user)
  getCurrentUserBudget: (uid) => {
      return axios.get(`/api/user/budget/${uid}`);
  },

  // Update the amount of category with id: (prev)
  updateBudgetByCategory: (uid, budgetData) => {
      return axios.put(`/api/users/${uid}`, budgetData)
  },
  // Update the amount of category with id: (prev)
  updateBudgetCategory: (id, budgetData) => {
      return axios.put(`/api/budgets/${id}`, budgetData)
  },

  // Deletes the budget category with id: 
  deleteSavedbudget: (id) => {
    return axios.delete("/api/budgets/" + id);
  },

  findCnbc: () => {
    return axios.get("/api/scrape/cnbc");
  },

  findToday: () => {
    return axios.get("/api/scrape/usatoday");
  },

  findStreet: () => {
    return axios.get("/api/scrape/street");
  }

};
