import React from 'react'
import classes from './NavigationBar.module.scss'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
function NavigationBar() {
  return (
    <div className={classes.header}>
      <Grid container>
        <Grid item xs={4}>
          item
        </Grid>
        <Grid item xs={4}>
          item
        </Grid>
        <Grid item xs={4} alignContent="center">
          <Button variant="contained" className={classes.startButton}>
            Start!
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}
export default NavigationBar
