/*
 src/actions/propertyActions.js
*/
import { apiRoot, fetchData } from '../apis';
export const getData = () => dispatch => {
  fetchData(`${apiRoot}/properties`).then(data => {
    dispatch({
      type: 'GET_DATA',
      payload: data
    });
  });
};
