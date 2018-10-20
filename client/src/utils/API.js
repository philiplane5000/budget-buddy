import axios from 'axios'

export default {
  // Gets all saved budgets: (user)
  getCurrentUserBudget: (uid) => {
    return axios.get(`/api/user/budget/${uid}`)
  },
  // Gets all saved budgets: (prev)
  getCurrentBudget: () => {
    return axios.get('/api/budgets')
  },

  createNewUser: (uid) => {
    return axios.post(`/api/user/new/${uid}`)
  },

  // Update the amount of category with id: (user)
  updateBudgetByCategory: (uid, budgetData) => {
    return axios.put(`/api/user/update/${uid}`, budgetData)
  },
  // Update the amount of category with id: (prev)
  updateBudgetCategory: (id, budgetData) => {
    return axios.put(`/api/budgets/${id}`, budgetData)
  },

  // Deletes the budget category with id: 
  deleteSavedbudget: (id) => {
    return axios.delete('/api/budgets/' + id)
  },

  savedArticles: (uid, articleData) => {
    return axios.put(`/api/user/savedarticles/${uid}`, articleData)
  },

  findCnbc: () => {
    return axios.get('/api/scrape/cnbc')
  },

  findToday: () => {
    return axios.get('/api/scrape/usatoday')
  },

  findStreet: () => {
    return axios.get('/api/scrape/street')
  }

}
