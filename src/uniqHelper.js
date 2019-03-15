import { uniqBy } from 'lodash';

export const uniqHelper = arr => {
  return uniqBy(arr, function(property) {
    return [property.location.address, property.location.apartment].join();
  }).filter(property => property.isActive);
};
