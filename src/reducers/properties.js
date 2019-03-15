import { uniqBy } from 'lodash';
import { uniqHelper } from '../uniqHelper';
/*
 src/reducers/simpleReducer.js
*/
export default (
  state = {
    data: null,
    navItems: {
      citys: [],
      neighborhoods: []
    }
  },
  action
) => {
  switch (action.type) {
    case 'GET_DATA':
      const dedupedProperties = uniqHelper(action.payload);
      const navCitys = action.payload
        .map(function(value) {
          return value.nav_city;
        })
        .filter(function(obj) {
          return obj;
        })
        .sort();
      const navNeighborhoods = action.payload
        .map(function(value) {
          return value.neighborhood;
        })
        .filter(function(obj) {
          return obj;
        })
        .sort();
      return {
        data: [...dedupedProperties],
        navItems: {
          citys: [...new Set(navCitys)],
          neighborhoods: [...new Set(navNeighborhoods)]
        }
      };
    default:
      return state;
  }
};
