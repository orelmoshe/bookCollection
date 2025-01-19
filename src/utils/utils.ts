export const generateUniqId = () => {
  return Math.floor(20 + Math.random() * 999999999 + 1) + new Date().getMilliseconds();
};
