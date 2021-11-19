import types from '../../mutation-types'
import ApiClient from '../../../api/ApiClient.js'

const apiVersion = 'v1'
const resource = 'articles'

const actions = {
  //////////////////////// with Api ////////////////////////
  search: (context, query) => {
    return new Promise((resolve, reject) => {
      let url = query ? `${resource}?query=${query}` : resource
      new ApiClient(url, {apiVersion}).get()
        .then(res => {
          if (res.data.status == "200"){
            context.commit(`global/${types.SET_ERROR}`, res.data.msg, {root: true})
          } else if (res.data) {

            context.commit(types.articles.get, res.data)
          }
          resolve()
        })
        .catch(err => {
          context.commit(`global/${types.SET_ERROR}`, err, {root: true});
          reject(err)
        })
    })
  },
  rec:(context, query)=> {
    return new Promise((resolve, reject) => {
      let url = resource+"/rec"
      new ApiClient(url, {apiVersion}).get()
      .then(res => {
          if (res.data.status == "200"){
            context.commit(`global/${types.SET_ERROR}`, res.data.msg, {root: true})
          } else if (res.data) {

            context.commit(types.articles.rec, res.data)
          }
          resolve()
        })
        .catch(err => {
          context.commit(`global/${types.SET_ERROR}`, err, {root: true});
          reject(err)
        })
      
    })
  },
  show: (context, id) => {
    return new Promise((resolve, reject) => {
      new ApiClient(resource, {apiVersion}).show(id)
        .then(res => {
          if (res.data.msg) context.commit(`global/${types.SET_ERROR}`, res.data.msg, {root: true})
          else if (res.data.data) {
            context.commit(types.articles.getone, JSON.parse(res.data.data))
          }
          resolve()
        })
        .catch(err => {
          context.commit(`global/${types.SET_ERROR}`, err, {root: true});
          reject(err)
        })
    })
  },
  update: (context, {id, formData}) => {
    return new Promise((resolve, reject) => {
      id
      ? new ApiClient(resource, {apiVersion}).update(id, formData)
          .then(res => {
            if (res.data.msg) context.commit(`global/${types.SET_ERROR}`, res.data.msg, {root: true})
            resolve()
          })
          .catch(err => {
            context.commit(`global/${types.SET_ERROR}`, err, {root: true});
            reject(err)
          })
      : new ApiClient(resource, {apiVersion}).create(id, formData)
          .then(res => {
            if (res.data.msg) context.commit(`global/${types.SET_ERROR}`, res.data.msg, {root: true})
            resolve()
          })
          .catch(err => {
            context.commit(`global/${types.SET_ERROR}`, err, {root: true});
            reject(err)
          })
    })
  },
  delete: (context, id=null) => {
    return new Promise((resolve, reject) => {
      id
      ? new ApiClient(resource, {apiVersion}).delete(id)
          .then(res => {
            if (res.data.msg) context.commit(`global/${types.SET_ERROR}`, res.data.msg, {root: true})
            resolve()
          })
          .catch(err => {
            context.commit(`global/${types.SET_ERROR}`, err, {root: true});
            reject(err)
          })
      : resolve()
    })
  },
  status: (context, {id, status}) => {
    return new Promise((resolve, reject) => {
      id
      ? new ApiClient(`${resource}/${id}/${status}`, {apiVersion}).create()
          .then(res => {
            if (res.data.msg) context.commit(`global/${types.SET_ERROR}`, res.data.msg, {root: true})
            resolve()
          })
          .catch(err => {
            context.commit(`global/${types.SET_ERROR}`, err, {root: true});
            reject(err)
          })
      : resolve()
    })
  },
  ///////////////////////// without Api /////////////////////////////
  query: async (context, query) => {
    query
    ? context.commit(types.articles.query, query)
    : context.commit(types.articles.query, null)
  },
  queryHistory: async (context, track) => {
    if (track) context.commit(types.articles.queryHistory, track)
  },
  editID: async (context, editID) => {
    context.commit(types.articles.editID, editID);
  },
  editing: async (context, editing) => {
    context.commit(types.articles.editing, editing);
  },
  article: async (context, article) => {
    context.commit(types.articles.getone, article)
  },
  articleList: async(context, articleList) => {
    context.commit(types.articles.get, articleList)
  },
  articleRecList: async(context, articleRecList) =>{
    context.commit(types.articles.rec, articleRecList)
  },
  page: async (context, page) => {
    context.commit(types.articles.page, page)
  },
};

export default actions;
