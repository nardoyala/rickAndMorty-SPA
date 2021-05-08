const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
  const apiURL = id ? `${API}${id}` : API;
  const response = await fetch(apiURL);
  const data = await response.json();
  return data;
};

export default getData;
