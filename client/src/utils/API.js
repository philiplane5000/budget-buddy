import axios from 'axios'

export default {
  // Gets all user data: 
  getCurrentUser: (uid) => {
    return axios.get(`/api/user/budget/${uid}`)
  },

  createNewUser: (uid) => {
    return axios.post(`/api/user/new/${uid}`)
  },

  updateBudgetByCategory: (uid, budgetData) => {
    return axios.put(`/api/user/update/${uid}`, budgetData)
  },

  saveArticle: (uid, articleData) => {
    return axios.put(`/api/user/savedarticles/${uid}`, articleData)
  },

  deleteArticle: (uid, articleData) => {
    return axios.put(`/api/user/deletearticle/${uid}`, articleData)
  },

  retrieveSavedArticles: (uid) => {
    return axios.get(`/api/user/articles/${uid}`)
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
