export const apiRoot = 'https://api.walk.in/api';

export function fetchData(url) {
  return fetch(url).then(resp => resp.json());
}

export const getFilteredProperties = (type, area) => {
  const url = `${apiRoot}/properties?filter={"where": {"${type}": "${area}"} }`;
  return fetchData(url).then(data => {
    let sortedData;
    sortedData = data.sort((a, b) => a.details.price - b.details.price);
    return sortedData;
  });
};
