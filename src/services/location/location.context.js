import React, { useState, useEffect } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("san francisco");
  const [isLoading, setisLoading] = useState(false);

  const onSearch = (searchKeyword) => {
    setisLoading(true);
    setKeyword(searchKeyword);

    if (!searchKeyword.length) {
      return;
    }

    locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setisLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setisLoading(false);
        setError(err);
      });
  };

  return (
    <LocationContext.Provider
      value={{ isLoading, error, location, search: onSearch, keyword }}
    >
      {children}
    </LocationContext.Provider>
  );
};