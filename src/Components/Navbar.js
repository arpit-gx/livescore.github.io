
import { AppBar, Button, Dialog, DialogContent, DialogContentText, DialogTitle, Icon, IconButton, Menu, Toolbar, Typography } from "@material-ui/core";
import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { AccessAlarm, Facebook, Home, LinkedIn, SettingsPowerRounded, ThreeDRotation, Twitter } from '@material-ui/icons';
import SearchBar from "material-ui-search-bar";

const Navbar = () =>{
    return(
       <AppBar position = "sticky">
       <Toolbar>
    
           <img style={{width:40, marginRight:"12px", padding:"12", borderRadius:"3px" }} src={require("../Image/GLXX.png") }alt=""></img>

    
       <Typography variant="h5">Gilli</Typography>
       <SearchBar style={{marginLeft:"800px", height:"40px"}}/>
      
       <a  href="https://www.facebook.com/profile.php?id=100040402384254">
       <IconButton  style={{marginLeft:20}}>
           <Facebook style={{color:"white"}}/>
           </IconButton>
           </a>
          
           <IconButton color="inherit" style={{marginLeft:10}}> 
           <a href="https://twitter.com/ArpitSh20464600?s=09">
           <Twitter style={{color:"white"}} />
           </a>
           </IconButton>
           <IconButton color="inherit" style={{marginLeft:10}}>
           <a href="https://www.linkedin.com/in/arpit-sharma-5264311a0">
           <LinkedIn style={{color:"white"}}/>
           </a>
           </IconButton>
       
       </Toolbar>
    
        
       </AppBar> 
    )
    
};
export default Navbar;