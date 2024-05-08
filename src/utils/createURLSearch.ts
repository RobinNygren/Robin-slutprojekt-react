const createURLSearch = (paramsMap: {
  [key: string]: string | undefined;
}): string => {
  const params = new URLSearchParams();
  Object.keys(paramsMap).forEach((key) => {
    const value = paramsMap[key];
    if (value !== undefined) {
      params.append(key, value);
    }
  });
  return params.toString();
};

export default createURLSearch;
