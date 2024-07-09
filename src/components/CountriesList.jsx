import React, { useEffect, useState } from "react";
// import countriesdata from "../countriesdata";
import CountryCard from "./CountryCard";
import "./CountriesListShimmer.css";
import CountriesListShimmer from "./CountriesListShimmer";

function CountriesList({ query }) {
  const [countriesData, setcountriesData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setcountriesData(data);
      });

    // Unmout Example
    // const interval_id= setInterval(()=>{
    //   console.log("running countriesList component");
    // },1000)

    // Unmout
    // return ()=>{
    //  console.log("Cleaning Up");
    //  clearInterval(interval_id)
    // }
  }, []);

  // if (countriesData.length === 0) {
  //   fetch("https://restcountries.com/v3.1/all")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setcountriesData(data);
  //     });
  // }

  if(countriesData.length == 0)
    {
      return <CountriesListShimmer/>
    }

  return (
    <>
    <div className="countries-container">
          {countriesData
            .filter((country) =>
              country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
            )
            .map((country) => {
              // console.log(country);
              return (
                <CountryCard
                  key={country.name.common}
                  flag={country.flags.svg}
                  name={country.name.common}
                  population={country.population.toLocaleString("en-IN")}
                  region={country.region}
                  capital={country.capital?.[0]}
                  data = {country}
                />
              );
            })}
        </div>
    </>
  );
}

export default CountriesList;
