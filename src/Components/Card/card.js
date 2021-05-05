import React,{useState} from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import vs from '../../image/vs.png'
import dc from '../../image/dc.svg'
import mi from '../../image/mi.webp'
import csk from '../../image/csk.png'
import srh from '../../image/srh.png'
import kkr from '../../image/kkr.png'
import pj from '../../image/pj.svg'
import rr from '../../image/rr.svg'
import rcb from '../../image/rcb.png'
import { getMatchDetail } from '../../Api/api';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { Fragment } from 'react';

function MyCard({match}) {

    const handleclick = (id) => {
        getMatchDetail(id)
        .then((res)=>{
            console.log("Match Data:", res);
            setDetail(res);
            handleOpen();    
        })
        .catch((err)=>(console.log("error :", err)))
    }

    const [detail,setDetail] = useState([]);

    const [open,setOpen] = useState(false);

    const handleClose = () =>{
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    let team1;
    let team2;
    if(match["team-1"]=="Delhi Capitals"){
        team1=dc
    }
    else if(match["team-1"]=="Mumbai Indians"){
        team1=mi
    }
    else if(match["team-1"]=="Chennai Super Kings"){
        team1=csk
    }else if(match["team-1"]=="Kolkata Knight Riders"){
        team1=kkr
    }else if(match["team-1"]=="Punjab Kings"){
        team1=pj
    }else if(match["team-1"]=="Sunrisers Hyderabad"){
        team1=srh
    }else if(match["team-1"]=="Royal Challengers Bangalore"){
        team1=rcb
    }else if(match["team-1"]=="Rajasthan Royals"){
        team1=rr
    }

    if(match["team-2"]=="Delhi Capitals"){
        team2=dc
    }
    else if(match["team-2"]=="Mumbai Indians"){
        team2=mi
    }
    else if(match["team-2"]=="Chennai Super Kings"){
        team2=csk
    }else if(match["team-2"]=="Kolkata Knight Riders"){
        team2=kkr
    }else if(match["team-2"]=="Punjab Kings"){
        team2=pj
    }else if(match["team-2"]=="Sunrisers Hyderabad"){
        team2=srh
    }else if(match["team-2"]=="Royal Challengers Bangalore"){
        team2=rcb
    }else if(match["team-2"]=="Rajasthan Royals"){
        team2=rr
    }

    const getMatchesCard =()=>
    {return (
        <Card style={{marginTop:"10px"}}>
            <CardContent>
                <Grid container justify="center" alignItems="center" spacing={2}>
                    <Grid item>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <img style={{width:'200px'}} src={team1}/>
                            <Typography>{match["team-1"]}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item><img src={vs} style={{width:'300px'}}/></Grid>
                    <Grid item>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <img style={{width:'200px'}} src={team2}/>
                            <Typography>{match["team-2"]}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
                <CardActions>
                    <Grid container justify="center">
                        <Button variant="outlined" color="primary" onClick={()=>(handleclick(match.unique_id))}>See More</Button>
                        <Button style={{marginLeft:"5px"}} variant="outlined" color="primary">Time {new Date(match.dateTimeGMT).toLocaleString()}</Button>
                    </Grid>
                </CardActions>
        </Card>
    );
    };

    const getDialog = () => (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dailog-title">{"Match Details..."}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Typography>{detail.stat}</Typography>
                    <Typography>
                        Match:
                        <span style={{fontStyle:"italic", fontWeight:"bold"}}>
                            {detail.matchStarted?"Started":"Not Started"}
                        </span>
                    </Typography>
                    <Typography>
                        Score:
                        <span style={{fontStyle:"italic", fontWeight:"bold"}}>
                            {detail.score}
                        </span>
                    </Typography>
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose} autoFocus>Close</Button>
            </DialogActions>
        </Dialog>
    )

    return <Fragment>
        {getMatchesCard()}
        {getDialog()}
    </Fragment>;
}

export default MyCard
