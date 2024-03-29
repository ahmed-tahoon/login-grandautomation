export const isAuthenticated = () => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    return auth && auth.token ? true : false;
  };
  