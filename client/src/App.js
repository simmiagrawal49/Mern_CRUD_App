import './App.css';
import React from 'react';
import Add from './components/Add/Add';
import Fetch from './components/Fetch/Fetch';
import Update from './components/Update/Update';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import useStyles from './styles';
import { BrowserRouter as Router,Route} from "react-router-dom";
const App = () => {

   const classes = useStyles();
  return (
     <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Stationary Collection</Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={4}>
            <Add/>
            </Grid>
             <Router>
            <Grid item xs={12} sm={8}>                    
           <Fetch/>
            <Route path="/Update/:id" component={Update} /> 
            </Grid>
            </Router>
          </Grid>
        </Container>
      </Grow>
       </Container>
  );
}

export default App;