import React,{useEffect, useState} from "react";
import numeral from 'numeral';
import Moment from 'moment';
import CountUp from 'react-countup';
import "./App.css";


function App() {

  const [countryInfo, setCountryInfo] = useState({});
  
  const date = Date(countryInfo.updated);
  const formattedDate = Moment(date).format('Do MMMM YYYY h:mm:ssa'); 

  console.log(formattedDate);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/countries/ireland')
    .then((response) => response.json())
    .then((data) => {
      setCountryInfo(data);
      console.log(data);
    });
  }, []);

  console.log(countryInfo.deaths);

  return (
    <div className="App">
      <div className="title">
        <h1>Covid-19 Stats {countryInfo.country}</h1>
        <img src={countryInfo.countryInfo.flag}/>
        {/* <img src="https://disease.sh/assets/img/flags/ie.png" alt=""/> */}
        {/* <img src={countryInfo.countryInfo.flag}/> */} 
      </div>

      <div className="stats">
        <div className="totalStats">
        <h3>Total Stats</h3>
          <ul>
            <li>Cases: {numeral(countryInfo.cases).format("0,0")}</li>
            <li>Deaths: {numeral(countryInfo.deaths).format("0,0")}</li>
            <li>Recovered: {numeral(countryInfo.recovered).format("0,0")}</li>
          </ul>
        </div>

        <div className="dailyStats">
        <h3>Todays Stats</h3>
          <ul>
            <li>Cases: {numeral(countryInfo.todayCases).format("0,0")}</li>
            <li>Deaths: {numeral(countryInfo.todayDeaths).format("0,0")}</li>
            <li>Recovered: {numeral(countryInfo.todayRecovered).format("0,0")}</li>
          </ul>
        </div>

        <div className="overallStats">
        <h3>Overall Stats</h3>
          <ul>
            <li>Population: {numeral(countryInfo.population).format("0,0")}</li>
            <li>Total Tests: {numeral(countryInfo.tests).format("0,0")}</li>
            <li>Active Cases: <strong>{numeral(countryInfo.active).format("0,0")}</strong></li>
            <li>of which are critical: <strong>{numeral(countryInfo.critical).format("0,0")}</strong></li>
          </ul>
        </div>
      </div>
      <footer>
        <h4>Last Updated: {formattedDate}</h4>
      </footer>
    </div>
  );
}
export default App;
