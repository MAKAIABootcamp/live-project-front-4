import React, { createContext } from "react";

export const searchParamsContext = createContext({});

const AppRouter = () => {
  return (
    <searchParamsContext.Provider value={{}}>
      {/* <Route element={<PublicRouter isAutentication={isLoggedIn} />}> */}

      {/* </Route> */}

      {/* <Route element={<PrivateRouter isAutentication={isLoggedIn} />}> */}

      {/* </Route> */}
    </searchParamsContext.Provider>
  );
};

export default AppRouter;
