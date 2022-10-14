import React, { useEffect, useState } from 'react'
import { fetchcountryData } from '../api/Api'
import { NativeSelect, FormControl } from '@material-ui/core'

const CountryPicker = ({ countryHandleChange }) => {

    const [countrydata, setCountrydata] = useState([])
    useEffect(() => {

        async function fetchCountryData() {
            let countryapiData = await fetchcountryData()
            setCountrydata(countryapiData)
        }
        fetchCountryData();
    }, [setCountrydata])
    console.log(countrydata)
    return (
        <FormControl onChange={(e) => countryHandleChange(e.target.value)}>
            <NativeSelect>
                <option value="">Global</option>
                {countrydata.map((name, index) => {
                    return <option value={name} key={index}>{name}</option>
                })}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
