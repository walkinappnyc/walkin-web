export const apiRoot = 'https://api.walk.in/api';

export function fetchData(url, opts) {
  return fetch(url, opts).then(resp => resp.json());
}

export const getFilteredProperties = (type, area) => {
  const url = `${apiRoot}/properties?filter={"where": {"${type}": "${area}"} }`;
  return fetchData(url).then(data => {
    let sortedData;
    sortedData = data.sort((a, b) => a.details.price - b.details.price);
    return sortedData;
  });
};

export const sendMsgToSupport = body => {
  const url = `${apiRoot}/support`
  return fetchData(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
};
