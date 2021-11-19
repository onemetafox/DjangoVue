import types from '../../mutation-types'

const mutations = {
  [types.articles.get](state, productList) {
    state.productList = productList
  },
  [types.articles.rec](state, productList) {
    state.productRecList = productList
  },
  [types.articles.getone](state, product) {
    state.product = product
  },
  [types.articles.query](state, query) {
    state.query = query
  },
  [types.articles.queryHistory](state, track) {
    let find = state.queryHistory.find(k => k === track)
    if (!find) state.queryHistory.push(track).sort()
  },
  [types.articles.editID](state, id) {
    state.id = id
  },
  [types.articles.editing](state, editing) {
    state.editing = editing
  },
  [types.articles.page](state, page) {
    state.page = page
  },
};

export default mutations;
