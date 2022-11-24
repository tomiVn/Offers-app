import { ICountry } from "../models/countryModel";
import countriesData from './countries.json';

export function _filter(value: string): ICountry[] {

    const filterValue = value.toLowerCase();

    return countriesData.filter(( c: ICountry ) => c.name.toLowerCase().includes( filterValue ));
  }