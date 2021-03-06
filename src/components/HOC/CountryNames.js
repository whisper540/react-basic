import React from 'react';
import DataComponent from './DataComponent';

const CountryNames = ({ data, selected}) =>
    <select className="people list" defaultValue={selected}>
        {data.map(({name}, i) =>
            <option key={i} value={name}>{name}</option>
        )}
    </select>;

const CountryDropDown = DataComponent(CountryNames, "https://restcountries.eu/rest/v1/all");

export default CountryDropDown;
