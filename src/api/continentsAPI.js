const getContinentsAPI = async () => {
  const data = await fetch('https://corona.lmao.ninja/v2/continents')
    .then((responce) => responce.json());
  return data;
};

export default getContinentsAPI;
