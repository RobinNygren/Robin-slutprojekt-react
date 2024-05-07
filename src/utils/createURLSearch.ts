const createURLSearch = (paramsMap: { [key: string]: string }): string => {
  const params = new URLSearchParams();
  Object.keys(paramsMap).forEach((key) => {
    if (paramsMap[key]) {
      params.append(key, paramsMap[key]);
    }
  });
  return params.toString();
};

export default createURLSearch;
