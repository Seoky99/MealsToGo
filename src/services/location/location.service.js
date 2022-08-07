import camelize from "camelize";
import { locations } from "./location.mock";

// From a search query, return data about location you are seeking
export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];

    if (!locationMock) {
      reject("not found");
    }

    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  const formattedResults = camelize(result);
  const { geometry = {} } = formattedResults.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng };
};
