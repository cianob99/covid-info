import React,{useEffect, useState} from "react";
import numeral from 'numeral';
import Moment from 'moment';
import "./App.css";


function App() {

  const [countryInfo, setCountryInfo] = useState({});
  
  const date = Date(countryInfo.updated);
  const formattedDate = Moment(date).format('Do MMMM YYYY, h:mm:ss a'); 

  console.log(formattedDate);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/countries/ireland')
    .then((response) => response.json())
    .then((data) => {
      setCountryInfo(data);
      console.log(data);
    });
  }, []);

  console.log(countryInfo.updated);

  return (
    <div className="App">
      <div className="title">
        <h1>Covid-19 Stats {countryInfo.country}</h1>
        <img src="https://disease.sh/assets/img/flags/ie.png" alt=""/>
        <h4>Last Updated: {formattedDate}</h4>

        {/* <img src={countryInfo.countryInfo.flag}/> */}
        
      </div>
      <table className="stats">
        <tr>
          <td><h3>Total Stats</h3></td>
          <td><h3>Todays Stats</h3></td>
          <td><h3>Overall Stats</h3></td>
        </tr>

        <tr>
          <td className="totalStats">
            <ul>
              <li>Total Cases: {numeral(countryInfo.cases).format("0,0")}</li>
              <li>Total Deaths: {numeral(countryInfo.totalDeaths).format("0,0")}</li>
              <li>Total Recovered: {numeral(countryInfo.recovered).format("0,0")}</li>
            </ul>
          </td>

          <td className="dailyStats">
            <ul>
              <li>Todays Cases: {numeral(countryInfo.todayCases).format("0,0")}</li>
              <li>Todays Deaths: {numeral(countryInfo.todayDeaths).format("0,0")}</li>
              <li>Todays Recovered: {numeral(countryInfo.todayRecovered).format("0,0")}</li>
            </ul>
          </td>

          <td className="overallStats">
            <ul>
              <li>Population: {numeral(countryInfo.population).format("0,0")}</li>
              <li>Total Tests: {numeral(countryInfo.tests).format("0,0")}</li>
              <li>Active Cases: <strong>{numeral(countryInfo.active).format("0,0")}</strong></li>
              <li>of which are critical: <strong>{numeral(countryInfo.critical).format("0,0")}</strong></li>
            </ul>
          </td>
        </tr>
      </table>
    </div>
  );
}
export default App;
