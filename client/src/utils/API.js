import axios from "axios";

export default {
  //ALL API ROUTES TO FETCH mongoDB DATA (SAVED budgetS):

  // Gets all saved budgets:
  getCurrentBudget: () => {
      return axios.get("/api/budgets");
  },

  // Update the amount of category with id:
  updateBudgetCategory: (id, budgetData) => {
      return axios.put(`/api/budgets/${id}`, budgetData)
  },

  // Deletes the budget category with id:
  deleteSavedbudget: (id) => {
    return axios.delete("/api/budgets/" + id);
  },

};
