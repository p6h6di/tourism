// import countries from "world-countries";
import { City } from "country-state-city";

interface StateProps {
value: string;
label: string;
flag: string;
latLang:  (string | null | undefined)[];
region: string;
}

const countriesFormatted: StateProps[] = City.getCitiesOfState("IN", 'HP').map((item) => ({
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
