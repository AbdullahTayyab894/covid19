import React, { useEffect, useState } from 'react'
import { fetchDialyData } from '../api/Api'
import Chart from 'chart.js/auto'
import { Line, Bar } from 'react-chartjs-2'

const Charts = ({ chartData: { confirmed, deaths, recovered }, countryData }) => {
    const [dailydata, setDailydata] = useState({})
    useEffect(() => {

        async function fetchData() {
            let dailyapiData = await fetchDialyData()
            setDailydata(dailyapiData)
        }
        fetchData();
    }, [])
    // console.log(dailydata)
    const lineChart = (
        dailydata.length ? (
            <Line
                data={{
                    labels: dailydata.map(({ LastUpdate }) => new Date(LastUpdate).toDateString()),
                    datasets: [{
                        data: dailydata.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        backgroundColor: 'rgb(57, 57, 247)',
                        fill: true,
                    }, {
                        data: dailydata.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        backgroundColor: 'rgb(248, 73, 73)',
                        fill: true,
                    },
                    ],
                }}
            />
        ) : null
    );
      const barChart = (
        confirmed ? (
          <Bar
            data={{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets: [
                {
                  label: "People",
                  backgroundColor: ['rgba(0, 0, 126, 0.603)', 'rgba(0, 146, 0, 0.603)', 'rgba(122, 0, 0, 0.603)'],
                  data: [confirmed.value, recovered.value, deaths.value],
                }
              ]
            }}
          />
        ) : null
      );
    return (
        <div>
            {countryData == "" ? lineChart : barChart}
        </div>
    )
}

export default Charts
