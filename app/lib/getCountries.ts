import countries from "world-countries";
import { Country, State, City } from "country-state-city";
// const countriesFormatted = countries.map((item) => ({
//   value: item.cca2,
//   label: item.name.common,
//   flag: item.flag,
//   latLang: item.latlng,
//   region: item.region,
// }));

const countriesFormatted = City.getCitiesOfState("IN", 'HP').map((item) => ({
      value: item.name,
      label: item.name,
      flag: item.countryCode,
      latLang: [item.latitude, item.longitude],
      region: "HP",
    }))

export const useCountries = () => {
  const getAllCountries = () => countriesFormatted;

  const getCountryByValue = (value: string) => {
    return countriesFormatted.find((item) => item.value === value);
  };

  return {
    getAllCountries,
    getCountryByValue,
  };
};
