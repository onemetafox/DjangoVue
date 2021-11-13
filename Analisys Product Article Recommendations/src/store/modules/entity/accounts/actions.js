import types from '../../../mutation-types'
import ApiClient from '../../../../api/ApiClient.js'

const apiVersion = 'v3'
const resource = 'entities/accounts'

const actions = {
  //////////////////////// with Api ////////////////////////
  search: (context, query) => {
    return new Promise((resolve, reject) => {
      let url = query ? `${resource}?query=${query}` : resource
      console.log('action url...', url)
      new ApiClient(url, {apiVersion}).get()
        .then(res => {
          if (res.data.msg) context.commit(`global/${types.SET_ERROR}`, res.data.msg, {root: true})
          else if (res.data.data) {
            context.commit(types.entity.accounts.get, JSON.parse(res.data.data))
            console.log('res...', JSON.parse(res.data.data))
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
            context.commit(types.entity.accounts.getone, JSON.parse(res.data.data))
            resolve(JSON.parse(res.data.data))
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
    ? context.commit(types.entity.accounts.query, query)
    : context.commit(types.entity.accounts.query, null)
  },
  queryHistory: async (context, track) => {
    if (track) context.commit(types.entity.accounts.queryHistory, track)
  },
  editID: async (context, editID) => {
    context.commit(types.entity.accounts.editID, editID);
  },
  editing: async (context, editing) => {
    context.commit(types.entity.accounts.editing, editing);
  },
  account: async (context, account) => {
    context.commit(types.entity.accounts.getone, account)
  },
  page: async (context, page) => {
    context.commit(types.entity.accounts.page, page)
  },
};

export default actions;
