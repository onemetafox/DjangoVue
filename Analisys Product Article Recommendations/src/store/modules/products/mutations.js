import types from '../../mutation-types'

const mutations = {
  [types.products.get](state, productList) {
    state.productList = productList
  },
  [types.products.getone](state, product) {
    state.product = product
  },
  [types.products.query](state, query) {
    state.query = query
  },
  [types.products.queryHistory](state, track) {
    let find = state.queryHistory.find(k => k === track)
    if (!find) state.queryHistory.push(track).sort()
  },
  [types.products.editID](state, id) {
    state.id = id
  },
  [types.products.editing](state, editing) {
    state.editing = editing
  },
  [types.products.page](state, page) {
    state.page = page
  },
};

export default mutations;
