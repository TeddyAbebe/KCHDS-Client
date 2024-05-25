export const BASE_URL = process.env.REACT_APP_API_ROUTE;

export const getUserInfo = () => {
  const userInfoString = localStorage.getItem("userInfo");
  return userInfoString ? JSON.parse(userInfoString) : null;
};
