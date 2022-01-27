import React, { Fragment, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Fab, Grid } from '@material-ui/core';
import Navbar from './Components/Navbar';
import { getMatches } from './api/API';
import Cardx from './Components/Card';
import { SportsMmaOutlined } from '@material-ui/icons';

function App() {

  const[matches, setMatches] = useState([]);
  useEffect(() => {
    getMatches()
    .then((data) => {
      setMatches(data.matches)
      console.log(data.matches)
    })
    .catch();
  }, []);
  return (
    <div className="App">
    <Navbar style={{height:"20px"}}/>
    <h6 style={{ fontFamily:"sans-serif", alignItems:"baseline"}}> by Arpit Sharma</h6>
    <h1 style={{fontFamily:"sans-serif"}}>Gilli, Welcomes you !</h1> 
     <Grid container>
     <Grid sm="2"></Grid>
     <Grid sm="8">
       {matches.map((match)=>(
         <Fragment key={match.unique_id}>
         {match.type == "Twenty20" ? (
         <Cardx key={match.unique_id} match={match} />):("") }
       </Fragment>
       ))}
       </Grid>
     </Grid>
     
    
       
      

    </div>
  );
}

export default App;
