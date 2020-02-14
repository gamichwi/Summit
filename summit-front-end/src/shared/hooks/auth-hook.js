import { useState, useCallback, useEffect } from 'react';

let logoutTimer;

export const useAuth = () => {
  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState(false);

  //create the token on login
  const login = useCallback((userId, token, expirationDate) => {
    setToken(token);
    setTokenExpirationDate(null);
    setUserId(userId);
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60); //Expiry date is now plus one hour. Checks if already has an expirationdate
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      //stores token in localStorage
      "userData",
      JSON.stringify({
        userId: userId,
        token: token,
        expiration: tokenExpirationDate.toISOString() //ISOString can be converted back to a date later.
      })
    );
  }, []);
  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem("userData"); //Deletes Token
  }, []);

  //if token changes then adjust timer
  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime(); //difference in milliseconds
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  //if the token exists use that to login
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData")); //converts back to JSON
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date() //If Token date is greater than now then it is valid.
    ) {
      login(
        storedData.userId,
        storedData.token,
        new Date(storedData.expiration)
      );
    }
  }, [login]);

  return { token, login, logout, userId };
};
