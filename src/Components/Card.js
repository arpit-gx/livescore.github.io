import { Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from '@material-ui/core';
import { Image } from '@material-ui/icons';
import React, { Fragment, useState } from 'react';
import { getMDetails } from '../api/API';
const Cardx = ({match}) =>{
  const [detail, setDetail]= useState({});
  const [open, setopen] = useState(false);
  const handleClick=(id)=>{
    getMDetails(id).then((data)=>{console.log("Match Data",data); setDetail(data);handleOpen();}).catch((error)=>console.log(error))
  };
  const getCard =()=> {
    return(
        <Card  style={{marginTop:20 }}>
         <CardContent>
          <Grid container justify = "center" alignItems = "center" spacing={5}>
           <Grid item>
             <Typography variant="h5">{match["team-1"]}</Typography>
           </Grid>
           <Grid item>
             <Typography>
                <img style={{width:90}} src={require("../Image/VRS.jpg")} alt=""></img>
             </Typography>
           </Grid>
           <Grid item>
            <Typography variant="h5">{match["team-2"]}</Typography>
           </Grid>
           </Grid>

         </CardContent>
        <CardActions>
         <Grid style={{marginBottom:2}} container justify="center" spacing={4}>
            <Button  onClick={()=>{
              handleClick(match.unique_id);
            }} variant="contained" color="primary" >
               More
            </Button>
            <Button style={{marginLeft:20}}  variant="contained" color="secondary">
                Begin at {new Date(match.dateTimeGMT).toLocaleString()} 
            </Button>
            </Grid>
        </CardActions>
        </Card>
    );};
        const handleClose=()=>{
          setopen(false);
        };
        const handleOpen=()=>{
          setopen(true);
        };
    const getDialog = () => (
      <Dialog open={open} onClose={handleClose} >
      <DialogTitle id="alert-dialog-title" >{"Match Details"}</DialogTitle>
      <DialogContent>
      <DialogContentText>
      <Typography justify="center"><span style={{fontWeight:"bolder", color:"black"}}>{detail.stat}</span></Typography>
      <Typography style={{color:"black"}}>
        Match : <span style={{fontStyle:"italic", fontWeight:"bold"}}>
        {detail.matchStarted ? "Started" : "Still not Started !"}</span>
      </Typography>
      <Typography style={{color:"black"}}>
        <span style={{fontStyle:"italic", fontWeight:"bold"}}>{detail.score}</span>
      </Typography>
      </DialogContentText>
      </DialogContent>
      <DialogActions>
      <Button></Button>
      </DialogActions>
      </Dialog>
    );
    
    return <Fragment>
   { getCard() }
   {getDialog()}
    </Fragment>;
};
export default Cardx;