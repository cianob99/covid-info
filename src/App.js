import React,{useEffect, useState} from "react";
import numeral from 'numeral';
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
        <img src="https://disease.sh/assets/img/flags/ie.png"/>
        <h4>Updated: {countryInfo.updated}</h4>

        {/* <img src={countryInfo.countryInfo.flag}/> */}
        
      </div>
      <div className="totalStats">
        <h3>Total Stats</h3>
        <ul> 
          <li>Total Cases: {numeral(countryInfo.cases).format("0,0")}</li>
          <li>Total Deaths: {numeral(countryInfo.totalDeaths).format("0,0")}</li>
          <li>Total Recovered: {numeral(countryInfo.recovered).format("0,0")}</li>
        </ul>
      </div>
      <div className="dailyStats">
        <h3>Todays Stats</h3>
        <ul>
          <li>Todays Cases: {numeral(countryInfo.todayCases).format("0,0")}</li>
          <li>Todays Deaths: {numeral(countryInfo.todayDeaths).format("0,0")}</li>
          <li>Todays Recovered: {numeral(countryInfo.todayRecovered).format("0,0")}</li>
        </ul>
      </div>
      <div className="activeStats">
        <ul>
          <li>Population: {numeral(countryInfo.population).format("0,0")}</li>
          <li>Active Cases: <strong>{numeral(countryInfo.active).format("0,0")}</strong></li>
          <li>Of which are critical: <strong>{numeral(countryInfo.critical).format("0,0")}</strong></li>
        </ul>
      </div>
    
    </div>
  );
}
export default App;