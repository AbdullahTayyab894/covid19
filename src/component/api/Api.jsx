import axios from 'axios'

let url = "https://covid.mathdro.id/api"

export const fetchData = async (country)=>{
    let changeurl = url;
    if(country)
    {
        changeurl =  `${url}/countries/${country}`
    }
    try {
        const {data: {confirmed,deaths,recovered,lastUpdate}} = await axios.get(changeurl)
        console.log(lastUpdate)
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate,
        }
        return modifiedData;
    } catch (error) {

    }
}

export const fetchDialyData = async ()=>{
    try {
        const {data} = await axios.get(`${url}/daily`)

        const modifiedData = data.map((dailyData)=>({
            confirmed : dailyData.confirmed.total,
            deaths : dailyData.deaths.total,
            recovered : dailyData.recovered.total ,
            LastUpdate : dailyData.reportDate,
        }))

        return modifiedData;
    } catch (error) {
    
    }
}

export const fetchcountryData = async ()=>{
    try {
        const {data:{countries}} = await axios.get(`${url}/countries`)
        return countries.map((country)=>country.name );
    } catch (error) {  
    }
}