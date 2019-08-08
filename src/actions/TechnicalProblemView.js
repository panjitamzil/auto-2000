import axios from 'axios'
import _get from 'lodash/get'
import TYPE from '../types/TechnicalProblemView'

export const GET_LIST = (id = null) => {
  return (dispatch) => {
    dispatch({ type: TYPE.GET_LIST_REQUEST })
    const uri = 'https://private-dab03d-newauto2000.apiary-mock.com/technical-knowladge/1/view'
    return axios.get(uri)
      .then(payload => {
        return dispatch({
          type: TYPE.GET_LIST_SUCCESS,
          payload: _get(payload, 'data.data', [])
        })
      })
      .catch(err => {
        return dispatch({
          type: TYPE.GET_LIST_FAILED,
          error: 'Failed to featch Technical Knowladge'
        })
      }) 
  }
}

export default {
  GET_LIST
}