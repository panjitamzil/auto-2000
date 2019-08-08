import TYPE from '../types/TechnicalKnowladgeCategory'

export default (state = {}, action) => {
  switch (action.type) {
    case TYPE.GET_LIST_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: false,
        data: []  
      })

    case TYPE.GET_LIST_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        error: false,
        data: action.payload
      })

    case TYPE.GET_LIST_FAILED:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
        data: []  
      })

    default:
      return state
  }
};