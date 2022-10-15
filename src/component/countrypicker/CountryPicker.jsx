import React, { useEffect, useState } from 'react'
import { fetchcountryData } from '../api/Api'
import { NativeSelect, FormControl, Box } from '@material-ui/core'

const CountryPicker = ({ countryHandleChange }) => {
    const [countrydata, setCountrydata] = useState([])
    useEffect(() => {
        async function fetchCountryData() {
            let countryapiData = await fetchcountryData()
            setCountrydata(countryapiData)
        }
        fetchCountryData();
    }, [setCountrydata])
    return (
        <div style={{
            marginTop: "30px",
            marginBottom: "30px"
        }}>
            <Box style={{
                width: "270px",
                margin: "auto"
            }}>
                <FormControl onChange={(e) => countryHandleChange(e.target.value)} style={{
                    textAlign: "center"
                }}>
                    <NativeSelect>
                        <option value="">Global</option>
                        {countrydata.map((name, index) => {
                            return <option value={name} key={index}>{name}</option>
                        })}
                    </NativeSelect>
                </FormControl>
            </Box>
        </div>
    )
}
export default CountryPicker