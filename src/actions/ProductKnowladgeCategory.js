import axios from 'axios'
import _get from 'lodash/get'
import _isNull from 'lodash/isNull'
import TYPE from '../types/ProductKnowladgeCategory'

export const GET_LIST = (id = null) => {
  return (dispatch) => {
    dispatch({ type: TYPE.GET_LIST_REQUEST })
    const uri = _isNull(id) ? `https://private-dab03d-newauto2000.apiary-mock.com/product-knowladge-categories`:`https://private-dab03d-newauto2000.apiary-mock.com/product-knowladge-categories/${id}`
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
          error: 'Failed to featch Product Knowladge Category'
        })
      }) 
  }
}

export default {
  GET_LIST
}