import React,{useEffect, useState} from "react";
import "./App.css";


function App() {

  const [countryInfo, setCountryInfo] = useState({});

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/countries/ireland')
    .then((response) => response.json())
    .then((data) => {
      setCountryInfo(data);
      console.log(data);
    });
  }, []);

  return (
    <div className="App">
      <div className="title">
        <h1>Covid-19 Stats {countryInfo.country}</h1>
        <img src={countryInfo.countryInfo.flag}/>
        
      </div>
      <div className="totalStats">
        <h3>Total Stats</h3>
        <h4>Updated: {countryInfo.updated}</h4>
        <ul> 
          <li>Total Cases: {countryInfo.cases}</li>
          <li>Total Deaths: {countryInfo.totalDeaths}</li>
          <li>Total Recovered: {countryInfo.recovered}</li>
        </ul>
      </div>
      <div className="dailyStats">
        <h3>Todays Stats</h3>
        <ul>
          <li>Todays Cases: {countryInfo.todayCases}</li>
          <li>Todays Deaths: {countryInfo.todayDeaths}</li>
          <li>Todays Recovered: {countryInfo.todayRecovered}</li>
        </ul>
      </div>
      <div className="activeStats">
        <ul>
          <li>Population: {countryInfo.population}</li>
          <li>Active Cases: <strong>{countryInfo.active}</strong></li>
          <li>Of which are critical: <strong>{countryInfo.critical}</strong></li>
        </ul>
      </div>
    
    </div>
  );
}
export default App;