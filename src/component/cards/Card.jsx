import React from 'react'
import CountUp from 'react-countup';
import { CardContent, Typography, Grid, Box } from '@material-ui/core'
import logo from '../../logo.png'

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  if (!confirmed) {
    return "looding..."
  }
  return (
    <div>
      <Box style={{
        width:"300px",
        margin:"auto",
          justifyContent: "center"
        }}>
        <img src={logo} alt="Covid-19 image" width="300px" height="100px"  />
      </Box>
      <Grid container spacing={3} style={{
        justifyContent: "center",
        paddingTop: "20px"
      }}>
        <Grid item md={3} xs={12} style={{
          textAlign: "center",
          boxShadow: "2px 4px 10px gray",
          margin: "10px",
        }}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Confirmed</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={confirmed.value} duration={3} />
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body'>Number of active cases of COVID-19</Typography>
          </CardContent>
        </Grid>

        <Grid item md={3} xs={12} style={{
          textAlign: "center",
          boxShadow: "2px 4px 10px gray",
          margin: "10px",
        }}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Deaths</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={deaths.value} duration={3} />
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body'>Number of deaths of COVID-19</Typography>
          </CardContent>
        </Grid>

        <Grid item md={3} xs={12} style={{
          textAlign: "center",
          boxShadow: "2px 4px 10px gray",
          margin: "10px",
        }}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Recovered</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={recovered.value} duration={1} />
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body'>Number of recovered cases of COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}
export default Cards