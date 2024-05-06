//들어온 길이가 너무 긴경우 내용 자르기

const useTruncate = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + '...' : str;
};

export default useTruncate;
