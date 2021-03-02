import './App.css';
import React from 'react';
import Add from './components/Add/Add';
import Fetch from './components/Fetch/Fetch';
import { Container, AppBar ,Typography} from '@material-ui/core';
import useStyles from './styles';
const App = () => {

   const classes = useStyles();
  return (
   
     <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Stationary Collection</Typography>
      </AppBar>
       <Add/>
       <Fetch/>
       </Container>
  );
}

export default App;

//JSX fragment ---> "<></>"
//it should contain call to other components or start or contain div
