/*
 src/actions/propertyActions.js
*/
import { fetchData } from '../apis';
export const getData = () => dispatch => {
  fetchData('https://walkin-staging.herokuapp.com/api/properties').then(
    data => {
      dispatch({
        type: 'GET_DATA',
        payload: data
      });
    }
  );
};
