import types from '../../mutation-types'

const mutations = {
  [types.articles.get](state, articleList) {
    state.articleList = articleList
  },
  [types.articles.rec](state, articleList) {
    state.articleRecList = articleList
  },
  [types.articles.getone](state, article) {
    state.article = article
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
