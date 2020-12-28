import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CountryList() {

    useEffect(() => {
        fetchList();
    }, []);

    const [list, setList] = useState([]);

    const fetchList = async () => {
        const data = await fetch(
            'https://disease.sh/v3/covid-19/countries/ireland,uk,usa,france,germany,poland,australia,new zealand,china'
        );
      
        const list = await data.json();
        console.log(list);
        setList(list);
    };

    return (
        <div className='countryList'>
            <h1>Covid-19 Stats</h1>
            <h2>Select a Country</h2>
                
                {list.map(list => (
                    <div key={list.country} id='countryList' className={list.country}>
                        <Link to={`/${list.country}`}>
                        <img src={list.countryInfo.flag} />
                        </Link>
                        <h3>{list.country}</h3>
                    </div>
                ))}
        </div>
    );

}

export default CountryList;