import React, { useEffect, useState } from "react";
import { fetchData } from './component/api/Api'
import Cards from './component/cards/Card'
import Charts from "./component/chart/Chart";
import CountryPicker from "./component/countrypicker/CountryPicker";

function App() {

  const [data, setData] = useState({})
  const [cuntryChange, setCountryChange] = useState({})

  useEffect(() => {

    async function getdata() {
      let data = await fetchData();
      setData(data)
    }
    getdata()
  }, [])

  const countryHandleChange = async (country) => {
    let data = await fetchData(country);
    setData(data)
    setCountryChange(country)
  }

  return (
    <div className="App">
      <Cards data={data} />
      <CountryPicker  countryHandleChange={countryHandleChange}/>
      <Charts chartData = {data} countryData = {cuntryChange}/>
    </div>
  );
}

export default App;
