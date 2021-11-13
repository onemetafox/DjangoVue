import types from '../../../mutation-types'

const mutations = {
  [types.entity.campaines.get](state, campaines) {
    state.campaines = campaines
  },
  [types.entity.campaines.getone](state, campaine) {
    state.campaine = campaine
  },
  [types.entity.campaines.query](state, query) {
    state.query = query
  },
  [types.entity.campaines.queryHistory](state, track) {
    let find = state.queryHistory.find(k => k === track)
    if (!find) state.queryHistory.push(track).sort()
  },
  [types.entity.campaines.editID](state, editID) {
    state.editID = editID
  },
  [types.entity.campaines.editing](state, editing) {
    state.editing = editing
  },
  [types.entity.campaines.page](state, page) {
    state.page = page
  },
};

export default mutations;
