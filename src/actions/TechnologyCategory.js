import axios from 'axios'
import _get from 'lodash/get'
import _isNull from 'lodash/isNull'
import TYPE from '../types/TechnologyCategory'

export const GET_LIST = () => {
  return (dispatch) => {
    dispatch({ type: TYPE.GET_LIST_REQUEST })
    const uri = `https://private-dab03d-newauto2000.apiary-mock.com/technology-categories`
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
          error: 'Failed to featch Technology'
        })
      }) 
  }
}

export default {
  GET_LIST
}