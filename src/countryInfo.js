import React, {useState, useEffect} from 'react';
import numeral from 'numeral';
import Moment from 'moment';
import { Link } from 'react-router-dom';

function CountryInfo({ match }) {

    
    useEffect(() => {
        fetchInfo();
        console.log(match);
    }, []);

    const [info, setInfo] = useState([]);

    const fetchInfo = async () => {
        const data = await fetch(
            `https://disease.sh/v3/covid-19/countries/${match.params.country}`
        );

        const info = await data.json();
        console.log(info);
        setInfo(info);
    };

    const date = Date(info.updated);
    const formattedDate = Moment(date).format('Do MMMM YYYY h:mm:ssa'); 


    return (
    <div className="CountyInfo">
      <div className="title">
        <h1>Covid-19 Stats {info.country}</h1>
        <h3><a href="/covid-info">Back to Country Selection</a></h3>
        <h4>Last Updated: {formattedDate}</h4>
        {/* <img src="https://disease.sh/assets/img/flags/ie.png" alt=""/> */}
        {/* <img src={countryInfo.countryInfo.flag}/> */}
      </div>

      <div className="stats">
        <div className="totalStats">
        <h3>Total Stats</h3>
          <ul>
            <li>Cases: {numeral(info.cases).format("0,0")}</li>
            <li>Deaths: {numeral(info.deaths).format("0,0")}</li>
            <li>Recovered: {numeral(info.recovered).format("0,0")}</li>
          </ul>
        </div>

        <div className="dailyStats">
        <h3>Todays Stats</h3>
          <ul>
            <li>Cases: {numeral(info.todayCases).format("0,0")}</li>
            <li>Deaths: {numeral(info.todayDeaths).format("0,0")}</li>
            <li>Recovered: {numeral(info.todayRecovered).format("0,0")}</li>
          </ul>
        </div>

        <div className="overallStats">
        <h3>Overall Stats</h3>
          <ul>
            <li>Population: {numeral(info.population).format("0,0")}</li>
            <li>Total Tests: {numeral(info.tests).format("0,0")}</li>
            <li>Active Cases: <strong>{numeral(info.active).format("0,0")}</strong></li>
            <li>of which are critical: <strong>{numeral(info.critical).format("0,0")}</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CountryInfo;