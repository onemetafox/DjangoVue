import types from '../../../mutation-types'

const mutations = {
  [types.entity.opportunities.get](state, opportunities) {
    state.opportunities = opportunities
  },
  [types.entity.opportunities.getone](state, opportunity) {
    state.opportunity = opportunity
  },
  [types.entity.opportunities.query](state, query) {
    state.query = query
  },
  [types.entity.opportunities.queryHistory](state, track) {
    let find = state.queryHistory.find(k => k === track)
    if (!find) state.queryHistory.push(track).sort()
  },
  [types.entity.opportunities.editID](state, editID) {
    state.editID = editID
  },
  [types.entity.opportunities.editing](state, editing) {
    state.editing = editing
  },
  [types.entity.opportunities.page](state, page) {
    state.page = page
  },
};

export default mutations;
