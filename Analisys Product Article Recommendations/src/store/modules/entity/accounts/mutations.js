import types from '../../../mutation-types'

const mutations = {
  [types.entity.accounts.get](state, accounts) {
    state.accounts = accounts
  },
  [types.entity.accounts.getone](state, account) {
    state.account = account
  },
  [types.entity.accounts.query](state, query) {
    state.query = query
  },
  [types.entity.accounts.queryHistory](state, track) {
    let find = state.queryHistory.find(k => k === track)
    if (!find) state.queryHistory.push(track).sort()
  },
  [types.entity.accounts.editID](state, editID) {
    state.editID = editID
  },
  [types.entity.accounts.editing](state, editing) {
    state.editing = editing
  },
  [types.entity.accounts.page](state, page) {
    state.page = page
  },
};

export default mutations;
