import React,{ Fragment, useEffect, useState } from "react";
import './App.css';
import {getMatches} from "./Api/api";
import MyCard from './Components/Card/card'
import Navbar from "./Components/Navbar/navbar";
import { Container, Grid } from "@material-ui/core";


function App() {

  const [matches,SetMacthes] = useState([]);

  //calling api everytime this page is loaded 
useEffect(() => {
    getMatches()
    .then(
      (res)=>{SetMacthes(res.matches);
      console.log(res.matches)}
    )
    .catch((err)=>console.log("error :",err))
},[]);

  return (
    <div className="App">
          <Navbar/>
      <Container>
        <Grid container style={{marginTop:"10px"}}>
          <Grid items xs={2}></Grid>
          <Grid items xs={8} >
            {matches.map((match)=>(
              <Fragment>
                {
                  match["team-1"]=="Mumbai Indians" 
                  || match["team-1"]=="Rajasthan Royals" 
                  || match["team-1"]=="Kolkata Knight Riders"
                  || match["team-1"]=="Royal Challengers Bangalore"
                  || match["team-1"]=="Punjab Kings"
                  || match["team-1"]=="Delhi Capitals"
                  || match["team-1"]=="Chennai Super Kings"
                  ?(
                  <MyCard match={match}/>
                  )
                  :("")
                }
              </Fragment>
            ))}
          </Grid>
        </Grid>
        </Container>
    </div>
  );
}

export default App;
